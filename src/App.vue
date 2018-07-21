<template>
  <div id="app">
    <router-view/>
	<el-button class='toggleConsole' size='small' circle plain icon='el-icon-info' @click='toggleConsole'></el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    toggleConsole(){
	  window.toggleConsole();
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: auto;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
  z-index: 2;
}
ul, li{
	margin: 0;
	padding: 0;
}
.toggleConsole{
  position: fixed;
  top:0;
  right:0;
  z-index: 10000;
  opacity: 0.618;
}
</style>

