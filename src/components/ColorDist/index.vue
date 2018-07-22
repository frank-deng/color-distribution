<template>
	<div class='ColorDist'>
		<div id='webgl_container' ref="webglContainer"></div>
		<div class='toolbar-container'>
			<el-upload class='upload-container'
				action=''
				:show-file-list='false'
				:before-upload='fileUploaded'
				:disabled='uploadLock'>
				<el-button size='small' circle icon='el-icon-upload2' :disabled='uploadLock'></el-button>
			</el-upload>
			<el-select
				v-model='colorMode'
				size='small'
				:disabled='uploadLock'>
				<el-option
					v-for='item in colorModeAll'
					:key='item.value'
					:value='item.value'
					:label='item.value'></el-option>
			</el-select>
		</div>
		<el-progress
			v-show='undefined !== progress'
			:show-text="false"
			:stroke-width="4"
			:percentage="progress"></el-progress>
	</div>
</template>
<style scoped>
.ColorDist {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	touch-action: none;
}
.upload-container {
	display: inline-block;
}
#webgl_container{
	position: absolute;
	left: 0;
	right: 0;
	top: 40px;;
	bottom: 0;
}
.toolbar-container{
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 10;
	height: 40px;
}
.el-progress{
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	right: 0;
}
</style>
<style>
.ColorDist .el-upload{
	display: inline-block;
}
</style>
<script src='./main.js'></script>

