webpackJsonp([1],{"+BTi":function(e,t){},BsBs:function(e,t,o){var n=o("Ml+6");n.FlyControls=function(e,t){function o(e,t){return function(){t.apply(e,arguments)}}function i(e){e.preventDefault()}this.object=e,this.domElement=void 0!==t?t:document,t&&this.domElement.setAttribute("tabindex",-1),this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1,this.tmpQuaternion=new n.Quaternion,this.mouseStatus=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new n.Vector3(0,0,0),this.rotationVector=new n.Vector3(0,0,0),this.handleEvent=function(e){"function"==typeof this[e.type]&&this[e.type](e)},this.keydown=function(e){if(!e.altKey){switch(e.keyCode){case 16:this.movementSpeedMultiplier=.1;break;case 87:this.moveState.forward=1;break;case 83:this.moveState.back=1;break;case 65:this.moveState.left=1;break;case 68:this.moveState.right=1;break;case 82:this.moveState.up=1;break;case 70:this.moveState.down=1;break;case 38:this.moveState.pitchUp=1;break;case 40:this.moveState.pitchDown=1;break;case 37:this.moveState.yawLeft=1;break;case 39:this.moveState.yawRight=1;break;case 81:this.moveState.rollLeft=1;break;case 69:this.moveState.rollRight=1}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(e){switch(e.keyCode){case 16:this.movementSpeedMultiplier=1;break;case 87:this.moveState.forward=0;break;case 83:this.moveState.back=0;break;case 65:this.moveState.left=0;break;case 68:this.moveState.right=0;break;case 82:this.moveState.up=0;break;case 70:this.moveState.down=0;break;case 38:this.moveState.pitchUp=0;break;case 40:this.moveState.pitchDown=0;break;case 37:this.moveState.yawLeft=0;break;case 39:this.moveState.yawRight=0;break;case 81:this.moveState.rollLeft=0;break;case 69:this.moveState.rollRight=0}this.updateMovementVector(),this.updateRotationVector()},this.mousedown=function(e){if(this.domElement!==document&&this.domElement.focus(),e.preventDefault(),e.stopPropagation(),this.dragToLook)this.mouseStatus++;else{switch(e.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1}this.updateMovementVector()}},this.mousemove=function(e){if(!this.dragToLook||this.mouseStatus>0){var t=this.getContainerDimensions(),o=t.size[0]/2,n=t.size[1]/2;this.moveState.yawLeft=-(e.pageX-t.offset[0]-o)/o,this.moveState.pitchDown=(e.pageY-t.offset[1]-n)/n,this.updateRotationVector()}},this.mouseup=function(e){if(e.preventDefault(),e.stopPropagation(),this.dragToLook)this.mouseStatus--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(e.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0}this.updateMovementVector()}this.updateRotationVector()},this.update=function(e){var t=e*this.movementSpeed,o=e*this.rollSpeed;this.object.translateX(this.moveVector.x*t),this.object.translateY(this.moveVector.y*t),this.object.translateZ(this.moveVector.z*t),this.tmpQuaternion.set(this.rotationVector.x*o,this.rotationVector.y*o,this.rotationVector.z*o,1).normalize(),this.object.quaternion.multiply(this.tmpQuaternion),this.object.rotation.setFromQuaternion(this.object.quaternion,this.object.rotation.order)},this.updateMovementVector=function(){var e=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-e+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",i,!1),this.domElement.removeEventListener("mousedown",a,!1),this.domElement.removeEventListener("mousemove",s,!1),this.domElement.removeEventListener("mouseup",r,!1),window.removeEventListener("keydown",c,!1),window.removeEventListener("keyup",d,!1)};var s=o(this,this.mousemove),a=o(this,this.mousedown),r=o(this,this.mouseup),c=o(this,this.keydown),d=o(this,this.keyup);this.domElement.addEventListener("contextmenu",i,!1),this.domElement.addEventListener("mousemove",s,!1),this.domElement.addEventListener("mousedown",a,!1),this.domElement.addEventListener("mouseup",r,!1),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",d,!1),this.updateMovementVector(),this.updateRotationVector()}},F99g:function(e,t){},GXEp:function(e,t){},I4nB:function(e,t){},M93x:function(e,t,o){"use strict";var n={name:"App",methods:{toggleConsole:function(){window.toggleConsole()}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view"),this._v(" "),t("el-button",{staticClass:"toggleConsole",attrs:{size:"small",circle:"",plain:"",icon:"el-icon-info"},on:{click:this.toggleConsole}})],1)},staticRenderFns:[]};var s=o("VU/8")(n,i,!1,function(e){o("l9yu")},null,null);t.a=s.exports},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=o("I4nB"),n=(o.n(t),o("+BTi")),i=(o.n(n),o("STLj")),s=o.n(i),a=o("cDSy"),r=(o.n(a),o("e0Bm")),c=o.n(r),d=o("uKbn"),l=(o.n(d),o("GegP")),h=o.n(l),u=o("GXEp"),f=(o.n(u),o("mtrD")),v=o.n(f),m=o("jAzQ"),p=(o.n(m),o("wOhx")),w=o.n(p),g=o("7+uW"),E=o("M93x"),b=o("YaEn"),k=o("tvR6"),S=(o.n(k),o("5Img")),y=o.n(S);g.default.use(w.a),g.default.use(v.a),g.default.use(h.a),g.default.use(c.a),g.default.use(s.a),g.default.config.productionTip=!1,e.DelayMapBatch=y.a,new g.default({el:"#app",router:b.a,components:{App:E.a},template:"<App/>"})}.call(t,o("DuR2"))},"Wg8/":function(e,t,o){e.exports=function(){return o("qDT4")('!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s="Wg8/")}({"Wg8/":function(e,t){self.addEventListener("message",function(e){let t={},n=e.data.imgData,r=n.width*n.height,o=(new Date).getTime();for(let e=0;e<r;e++){let l=(a=n.data[4*e],i=n.data[4*e+1],s=n.data[4*e+2],("00"+a.toString(16)).slice(-2)+("00"+i.toString(16)).slice(-2)+("00"+s.toString(16)).slice(-2));t[l]?t[l]++:t[l]=1;let c=(new Date).getTime();c-o>1e3&&(o=c,self.postMessage({progress:e/r}))}var a,i,s;self.postMessage({colorDist:t})})}});\n//# sourceMappingURL=f6da9933392bd28970ae.worker.js.map',null)}},YaEn:function(e,t,o){"use strict";var n=o("7+uW"),i=o("/ocq"),s=o("woOf"),a=o.n(s),r=o("fZjL"),c=o.n(r),d=(o("cwe7"),o("+BTi"),o("2X9z")),l=o.n(d),h=o("//Fk"),u=o.n(h);var f=o("Wg8/"),v=o.n(f);window.THREE=o("Ml+6"),o("BsBs").default;o("pXIW");function m(e){return[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function p(e){var t=parseInt(e.slice(0,2),16),o=parseInt(e.slice(2,4),16),n=parseInt(e.slice(4,6),16);return[-.1678*t-.3313*o+.5*n+128,.299*t+.587*o+.114*n,.5*t-.4187*o-.0813*n+128]}function w(e){var t=void 0,o=void 0,n=void 0,i=parseInt(e.slice(0,2),16)/255,s=parseInt(e.slice(2,4),16)/255,a=parseInt(e.slice(4,6),16)/255,r=Math.max(i,s,a),c=r-Math.min(i,s,a);if(n=r,0==c)t=0;else switch(r){case i:t=60*(s-a)/c;break;case s:t=120+60*(a-i)/c;break;case a:t=240+60*(i-s)/c}return t<0&&(t+=360),o=0==r?0:c/r,[o*=255,n*=255,t*=255/360]}var g=130,E=130,b=130,k={data:function(){return{progress:void 0,uploadLock:!1,colorDist:void 0,colorMode:"RGB",colorModeAll:[{value:"RGB"},{value:"YUV"},{value:"HSV"}],speed:1,speedDistance:10,horAngle:0,verAngle:0,distance:520,mouseHorAngle:0,mouseVerAngle:0,offsetHorAngle:0,offsetVerAngle:0,offsetDistance:0,camera:void 0,ballsGrp:void 0,points:void 0}},watch:{colorMode:function(){this.updateColorDist()},colorDist:function(){this.updateColorDist()}},methods:{fileUploaded:function(e){var t=this;return this.uploadLock=!0,new u.a(function(t,o){var n=new FileReader;n.addEventListener("load",function(e){t(e.target.result)}),n.readAsDataURL(e)}).then(function(e){return new u.a(function(t,o){var n=new Image;n.addEventListener("load",function(){t(this)}),n.addEventListener("error",function(e){l.a.error("Invalid image file format."),o()}),n.src=e})}).then(function(e){t.colorDist=void 0;var o=document.createElement("canvas");o.width=e.width,o.height=e.height;var n=o.getContext("2d");n.drawImage(e,0,0,e.width,e.height,0,0,o.width,o.height);var i=n.getImageData(0,0,o.width,o.height);return new u.a(function(e,o){var n=new v.a;n.addEventListener("message",function(o){o.data.colorDist?(t.progress=100,e(o.data.colorDist)):o.data.progress&&(t.progress=parseInt(100*o.data.progress))}),t.progress=0,n.postMessage({imgData:i})})}).then(function(e){t.colorDist=c()(e)}).catch(function(e){if(t.uploadLock=!1,e)throw e}),!1},updateColorDist:function(){var e=this;if(void 0!==this.colorDist){this.uploadLock=!0,this.points&&this.ballsGrp.remove(this.points);var t=new THREE.Geometry;t.colors=[],DelayMapBatch(this.colorDist,function(o){var n={RGB:m,YUV:p,HSV:w}[e.colorMode](o),i=Math.random()-.5,s=Math.random()-.5,a=Math.random()-.5;t.vertices.push(new THREE.Vector3(n[0]+i,n[1]+s,n[2]+a)),t.colors.push(new THREE.Color(parseInt(o,16)))},{batchSize:1e4}).then(function(){e.points=new THREE.Points(t,new THREE.PointsMaterial({vertexColors:!0})),a()(e.points.position,{x:2,y:2,z:2}),e.ballsGrp.add(e.points),e.progress=void 0,e.uploadLock=!1}).catch(function(t){if(e.uploadLock=!1,t)throw t})}}},mounted:function(){var e=this,t=this.$refs.webglContainer,o=new THREE.Scene;o.background=new THREE.Color(65793);var n=new THREE.AmbientLight(16777215,.5);o.add(n),(s=new THREE.DirectionalLight(16777215,.2)).position.set(0,2e3,3e3),o.add(s);var i=new THREE.Group;o.add(i),i.position.x=0,i.position.y=1,i.position.z=0,this.ballsGrp=i;var s,a=new THREE.CubeGeometry(260,260,260),r=new THREE.MeshPhongMaterial({color:16777215,side:THREE.BackSide,transparent:!0,opacity:.9}),c=new THREE.Mesh(a,r);c.position.x=g,c.position.y=E,c.position.z=b,i.add(c),(s=new THREE.PointLight(16777215,.3)).position.set(130,130,130),i.add(s);var d=new THREE.WebGLRenderer({antialias:!0});d.setPixelRatio(window.devicePixelRatio),d.setSize(t.offsetWidth,t.offsetHeight),t.appendChild(d.domElement);var l=new THREE.PerspectiveCamera(45,t.offsetWidth/t.offsetHeight,1,4e3);this.camera=l,window.addEventListener("resize",function(){var e=t.offsetWidth,o=t.offsetHeight;d.setSize(e,o),l.aspect=e/o,l.updateProjectionMatrix()});!function t(){e.verAngle+=e.offsetVerAngle,e.verAngle<=-89?e.verAngle=-89:e.verAngle>=89&&(e.verAngle=89),e.horAngle+=e.offsetHorAngle,e.distance+=e.offsetDistance,e.distance>=1e3?e.distance=1e3:e.distance<=1&&(e.distance=1);var n=e.distance*Math.sin(e.horAngle*Math.PI/180)*Math.cos(e.verAngle*Math.PI/180)+g,i=e.distance*Math.sin(e.verAngle*Math.PI/180)+E,s=e.distance*Math.cos(e.horAngle*Math.PI/180)*Math.cos(e.verAngle*Math.PI/180)+E;l.position.set(n,i,s),l.lookAt(new THREE.Vector3(g,E,b)),l.up=new THREE.Vector3(0,1,0),d.render(o,e.camera),requestAnimationFrame(t)}(),window.addEventListener("keydown",function(t){switch(t.keyCode){case 38:e.offsetVerAngle=e.speed;break;case 40:e.offsetVerAngle=-e.speed;break;case 37:e.offsetHorAngle=-e.speed;break;case 39:e.offsetHorAngle=e.speed;break;case 109:e.offsetDistance=e.speedDistance;break;case 107:e.offsetDistance=-e.speedDistance}}),window.addEventListener("keyup",function(t){switch(t.keyCode){case 38:case 40:e.offsetVerAngle=0;break;case 37:case 39:e.offsetHorAngle=0;break;case 109:case 107:e.offsetDistance=0}});new function(e,t){var o=this;this.handler=e,this.handlerEnd=t,this.x0=void 0,this.y0=void 0,window.addEventListener("mousedown",function(e){e.preventDefault(),void 0===o.x0&&(o.x0=e.screenX,o.y0=e.screenY)}),window.addEventListener("touchstart",function(e){void 0!==o.x0||e.touches.length>1||(o.x0=e.touches[0].screenX,o.y0=e.touches[0].screenY)}),window.addEventListener("mouseup",function(e){o.handlerEnd&&o.handlerEnd(e,o.x0,o.y0,e.screenX,e.screenY),o.x0=o.y0=void 0}),window.addEventListener("touchend",function(e){o.handlerEnd&&o.handlerEnd(e,o.x0,o.y0,e.screenX,e.screenY),o.x0=o.y0=void 0}),window.addEventListener("mousemove",function(e){void 0!==o.x0&&o.handler(e,o.x0,o.y0,e.screenX,e.screenY)}),window.addEventListener("touchmove",function(e){void 0!==o.x0&&o.handler(e,o.x0,o.y0,e.touches[0].screenX,e.touches[0].screenY)})}(function(o,n,i,s,a){e.horAngle+=-(s-n)/t.offsetWidth*10,e.verAngle+=(a-i)/t.offsetHeight*10})}},S={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"ColorDist"},[o("div",{ref:"webglContainer",attrs:{id:"webgl_container"}}),e._v(" "),o("div",{staticClass:"toolbar-container"},[o("el-upload",{staticClass:"upload-container",attrs:{action:"","show-file-list":!1,"before-upload":e.fileUploaded,disabled:e.uploadLock}},[o("el-button",{attrs:{size:"small",circle:"",icon:"el-icon-upload2",disabled:e.uploadLock}})],1),e._v(" "),o("el-select",{attrs:{size:"small",disabled:e.uploadLock},model:{value:e.colorMode,callback:function(t){e.colorMode=t},expression:"colorMode"}},e._l(e.colorModeAll,function(e){return o("el-option",{key:e.value,attrs:{value:e.value,label:e.value}})}))],1),e._v(" "),o("el-progress",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.progress,expression:"undefined !== progress"}],attrs:{"show-text":!1,"stroke-width":4,percentage:e.progress}})],1)},staticRenderFns:[]};var y=o("VU/8")(k,S,!1,function(e){o("lH43"),o("F99g")},"data-v-44935a22",null).exports;n.default.use(i.a);var L=new i.a({routes:[{path:"/",name:"Color Distribution",component:y}]});L.beforeEach(function(e,t,o){document.title=e.name,o()});t.a=L},cDSy:function(e,t){},cwe7:function(e,t){},jAzQ:function(e,t){},l9yu:function(e,t){},lH43:function(e,t){},tvR6:function(e,t){},uKbn:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5b6b1aa069a1402ad449.js.map