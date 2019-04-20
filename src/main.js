try{
  if('development'==process.env.NODE_ENV){
    const VConsole = require('vconsole');
    const vConsole = new VConsole();
    vConsole.show();
    self.vConsole = vConsole;
  }
}catch(e){
  console.error(e);
}

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'
import './main.css'

import {
	Upload,
	Button,
	Progress,
	Select,
	Option,
} from 'element-ui'
Vue.use(Upload);
Vue.use(Button);
Vue.use(Progress);
Vue.use(Select);
Vue.use(Option);

Vue.config.productionTip = false

import DelayMapBatch from 'delay-map-batch'
global.DelayMapBatch = DelayMapBatch;

/* eslint-disable no-new */
new Vue({
  el:'#app',
  template: '<router-view/>',
  router,
})

