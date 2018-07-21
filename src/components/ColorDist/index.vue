<template>
	<div class='main-container'>
		<div id='webgl_container' ref="webglContainer"></div>
		<el-upload class='upload-container' action='' :show-file-list='false' :before-upload='fileUploaded' :disabled='uploadLock'>
			<el-button size='small' circle icon='el-icon-upload2' :disabled='uploadLock'></el-button>
		</el-upload>
		<el-progress v-show='undefined !== progress' :text-inside="true" :stroke-width="18" :percentage="progress"></el-progress>
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
.el-progress{
	position: fixed;
	z-index: 10;
	left: 40px;
	right: 40px;
	top: 20px;
	transform: translateY(-50%);
}
</style>
<script src='./main.js'></script>

