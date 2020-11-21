import Vue from 'vue'
import router from './router'

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
import 'element-ui/lib/theme-chalk/index.css'

import main from './main.vue'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render:h=>h(main),
  router
});

