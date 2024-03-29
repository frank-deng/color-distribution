import Hammer from 'hammerjs';
import {Message} from 'element-ui'
import * as THREE from 'three';
import MainWorker from './processor.worker.js';

function rgb2hex(r,g,b){
	return ('00'+r.toString(16)).slice(-2)
		+ ('00'+g.toString(16)).slice(-2)
		+ ('00'+b.toString(16)).slice(-2);
}
function hex2rgb(str){
	return [
		parseInt(str.slice(0, 2), 16),
		parseInt(str.slice(2, 4), 16),
		parseInt(str.slice(4, 6), 16),
	];
}
function hex2yuv(str){
	let r = parseInt(str.slice(0, 2), 16);
	let g = parseInt(str.slice(2, 4), 16);
	let b = parseInt(str.slice(4, 6), 16);
	let y = 0.299 * r + 0.587 * g + 0.114 * b;
	let u = -0.1678 * r - 0.3313 * g + 0.5 * b + 128;
	let v = 0.5 * r - 0.4187 * g - 0.0813 * b + 128;
	return [u, y, v];
}
function hex2hsv(str){
	let h = undefined, s = undefined, v = undefined;
	let r = parseInt(str.slice(0, 2), 16) / 255.0;
	let g = parseInt(str.slice(2, 4), 16) / 255.0;
	let b = parseInt(str.slice(4, 6), 16) / 255.0;
	let cmax = Math.max(r,g,b), cmin = Math.min(r,g,b);
	let delta = cmax - cmin;
	v = cmax;
	if (delta == 0) {
		h = 0;
	} else {
		switch (cmax) {
			case r:
				h = 60 * (g-b) / delta;
			break;
			case g:
				h = 120 + 60 * (b-r) / delta;
			break;
			case b:
				h = 240 + 60 * (r-g) / delta;
			break;
		}
	}
	if (h < 0) {
		h += 360;
	}
	s = (cmax == 0 ? 0 : delta / cmax);
	h *= 255.0 / 360.0; s *= 255; v *= 255;
	return [s, v, h];
}
var centerPoint = {
	x: 130,
	y: 130,
	z: 130,
};

export default{
	data(){
		return {
			progress: undefined,
			uploadLock: false,
			colorDist: undefined,
			colorMode: 'RGB',
			colorModeAll: [
				{value:'RGB'},
				{value:'YUV'},
				{value:'HSV'},
			],

			speed: 3,
			speedDistance: 10,
			speedDistanceWheel: 30,
			horAngle: 0,
			verAngle: 0,
			distance: 520,
			distanceOrig: 520,
			distanceMax: 1000,

			mouseHorAngle: 0,
			mouseVerAngle: 0,

			offsetHorAngle: 0,
			offsetVerAngle: 0,
			offsetDistance: 0,

			camera: undefined,
			ballsGrp: undefined,
			points: undefined,
			pointsGeometry: undefined,
			pointsMaterial: undefined,
		};
	},
	watch: {
		'colorMode'(){
			this.updateColorDist();
		},
		'colorDist'(){
			this.updateColorDist();
		},
	},
	methods:{
		fileUploaded(file){
			this.uploadLock = true;
			new Promise((resolve, reject)=>{
				let reader = new FileReader();
				reader.addEventListener('load', function(event){
					resolve(event.target.result);
				});
				reader.readAsDataURL(file);
			}).then((src)=>{
				return new Promise((resolve, reject)=>{
					let image = new Image();
					image.addEventListener('load', function(){
						resolve(this);
					});
					image.addEventListener('error', function(e){
						Message.error('Invalid image file format.');
						reject();
					});
					image.src = src;
				});
			}).then((image)=>{
				this.colorDist = undefined;

				let canvas = document.createElement('canvas');
				canvas.width = image.width;
				canvas.height = image.height;
				let ctx = canvas.getContext('2d');
				ctx.drawImage(image,
					0, 0, image.width, image.height,
					0, 0, canvas.width, canvas.height
				);
				let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
				return new Promise((resolve, reject)=>{
					let worker = new MainWorker();
					worker.addEventListener('message', (event)=>{
						if (event.data.colorDist) {
							this.progress = 100;
							resolve(event.data.colorDist);
						} else if (event.data.progress) {
							this.progress = parseInt(event.data.progress * 100);
						}
					});
					this.progress = 0;
					worker.postMessage({imgData:imgData});
				});
			}).then((colorDist)=>{
				this.colorDist = Object.keys(colorDist);
			}).catch((e)=>{
				this.uploadLock = false;
				if (e){
					throw e;
				}
			});
			return false;
		},
		updateColorDist(){
			if (undefined === this.colorDist) {
				return;
			}

			this.uploadLock = true;
			if (this.points){
				this.ballsGrp.remove(this.points);
				/*
        		this.points.dispose();
				this.pointsGeometry.dispose();
				this.pointsMaterial.dispose();
				*/
			}
			this.$nextTick(()=>{
				this.pointsGeometry = new THREE.Geometry();
				this.pointsGeometry.colors = [];

        try{
          for(let hexColor of this.colorDist){
            let colorFunc = {
              'RGB': hex2rgb,
              'YUV': hex2yuv,
              'HSV': hex2hsv,
            };
            let color = colorFunc[this.colorMode](hexColor);
            let ox = Math.random()-0.5, oy = Math.random()-0.5, oz = Math.random()-0.5;
            this.pointsGeometry.vertices.push(new THREE.Vector3(color[0] + ox, color[1] + oy, color[2] + oz));
            this.pointsGeometry.colors.push(new THREE.Color(parseInt(hexColor, 16)));
          }
          this.pointsMaterial = new THREE.PointsMaterial({
            vertexColors: true,
          });
          this.points = new THREE.Points(this.pointsGeometry, this.pointsMaterial);
          this.ballsGrp.add(this.points);
          this.points.position.x = 2;
          this.points.position.y = 2;
          this.points.position.z = 2;
          this.progress = undefined;
          this.uploadLock = false;
        }catch(e){
					this.uploadLock = false;
          throw e;
        }
			});
		},
		onPanning(e){
			console.log(e);
		},
	},
	mounted(){
		var container = this.$refs.webglContainer;
		var scene = new THREE.Scene();
		scene.background = new THREE.Color(0x010101);

		var bgLight = new THREE.AmbientLight(0xffffff, 0.5);
		scene.add(bgLight);

		var light = new THREE.DirectionalLight(0xFFFFFF, 0.2);
		light.position.set(0,2000,3000);
		scene.add(light);

		var ballsGrp = new THREE.Group();
		scene.add(ballsGrp);
		ballsGrp.position.x = 0;
		ballsGrp.position.y = 1;
		ballsGrp.position.z = 0;
		this.ballsGrp = ballsGrp;

		//Draw background box for ballsGrp
		var geometry = new THREE.CubeGeometry(260,260,260);
		var material = new THREE.MeshPhongMaterial({
			color: 0xffffff,
			side:THREE.BackSide,
			transparent:true,
			opacity: 0.9,
		});
		var cube = new THREE.Mesh(geometry, material);
		cube.position.x = centerPoint.x;
		cube.position.y = centerPoint.y;
		cube.position.z = centerPoint.z;
		ballsGrp.add(cube);
	
		//Internal light for color display
		var light = new THREE.PointLight(0xFFFFFF, 0.3);
		light.position.set(130,130,130);
		ballsGrp.add(light);

		var renderer = new THREE.WebGLRenderer({antialias:true});
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(container.offsetWidth, container.offsetHeight);
		container.appendChild(renderer.domElement);

		var camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 1, 4000);
		this.camera = camera;

		window.addEventListener('resize', function(){
			var SCREEN_WIDTH = container.offsetWidth;
			var SCREEN_HEIGHT  = container.offsetHeight;
			renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
			camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
			camera.updateProjectionMatrix();
		});

		let animation = ()=>{
			this.verAngle += this.offsetVerAngle;
			if (this.verAngle <= -89) {
				this.verAngle = -89;
			} else if (this.verAngle >= 89) {
				this.verAngle = 89;
			}
			
			this.horAngle += this.offsetHorAngle;

			this.distance += this.offsetDistance;
			if (this.distance >= this.distanceMax) {
				this.distance = this.distanceMax;
			} else if (this.distance <= 1) {
				this.distance = 1;
			}

			let x = this.distance * Math.sin(this.horAngle * Math.PI / 180) * Math.cos(this.verAngle * Math.PI / 180) + centerPoint.x;
			let y = this.distance * Math.sin(this.verAngle * Math.PI / 180) + centerPoint.y;
			let z = this.distance * Math.cos(this.horAngle * Math.PI / 180) * Math.cos(this.verAngle * Math.PI / 180) + centerPoint.y;

			camera.position.set(x, y, z);
			camera.lookAt(new THREE.Vector3(
				centerPoint.x,
				centerPoint.y,
				centerPoint.z,
			));
			camera.up = new THREE.Vector3(0,1,0);
			renderer.render(scene, this.camera);
			requestAnimationFrame(animation);
		}
		animation();

		window.addEventListener('keydown', (e)=>{
			switch (e.keyCode) {
				case 38: //Up
					this.offsetVerAngle = this.speed;
				break;
				case 40: //Down
					this.offsetVerAngle = -this.speed;
				break;
				case 37: //Left
					this.offsetHorAngle = -this.speed;
				break;
				case 39: //Right
					this.offsetHorAngle = this.speed;
				break;
				case 109: //Farther
				case 189:
					this.offsetDistance = this.speedDistance;
				break;
				case 107: //Nearer
				case 187:
					this.offsetDistance = -this.speedDistance;
				break;
				default:
					//console.log(e);
				break;
			}
		});
		window.addEventListener('keyup', (e)=>{
			switch (e.keyCode) {
				case 38: //Up
				case 40: //Down
					this.offsetVerAngle = 0;
				break;
				case 37: //Left
				case 39: //Right
					this.offsetHorAngle = 0;
				break;
				case 109: //Farther
				case 189:
				case 107: //Nearer
				case 187:
					this.offsetDistance = 0;
				break;
			}
		});
		window.addEventListener('wheel', (e)=>{
			if (e.deltaY < 0) {
				this.distance += this.speedDistanceWheel;
			} else if (e.deltaY > 0) {
				this.distance -= this.speedDistanceWheel;
			}
		});

		//Handle touch event for mobile browser, as well as left mouse drag moving event
		var hammer = new Hammer(this.$refs.webglContainer, {});
		hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });
		hammer.get('swipe').set({ enabled: false });
		hammer.get('pinch').set({ enable: true });
		hammer.on('pan', (e)=>{
			this.offsetHorAngle = -e.velocityX * this.speed;
			this.offsetVerAngle = e.velocityY * this.speed;
		});
		hammer.on('panend', ()=>{
			this.offsetHorAngle = this.offsetVerAngle = 0;
		});
		hammer.on('pinchmove', (e)=>{
			this.distance = this.distanceOrig + this.distanceMax / 2 * (1 - e.scale);
		});
		hammer.on('pinchend', (e)=>{
			this.distanceOrig = this.distance;
		});
		hammer.on('mousewheel', (e)=>{
			console.log(e);
		});
	},
}
