import Vue from 'vue'
import Router from 'vue-router'

import ColorDist from '@/components/ColorDist/index.vue'

Vue.use(Router);
let router = new Router({
	routes: [
		{
			path: '/',
			name: '颜色分布',
			component: ColorDist,
		},
	],
});
router.beforeEach((to, from, next)=>{
	document.title = to.name;
	next();
});
export default router;
