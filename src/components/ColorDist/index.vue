<template>
	<div class='main-container'>
		<div id='webgl_container' ref="webglContainer"></div>
		<el-upload class='upload-container' action='' :show-file-list='false' :before-upload='fileUploaded'>
			<el-button size='small' circle icon='el-icon-upload2'></el-button>
		</el-upload>
	</div>
</template>
<style scoped>
.main-container {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	touch-action: none;
}
#webgl_container{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
}
.upload-container .el-button{
	position: fixed;
	left: 0;
	top: 0;
	z-index: 10;
	opacity: 0.618;
}
</style>
<script src='./main.js'></script>

