import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/Views/Home.vue';
import About from '@/Views/About.vue';
import Error from '@/Views/Error.vue';
import CoinDetail from '@/Views/CoinDetail.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '*',
			name: 'Error',
			component: Error
		},
		{
			path: '/coin/:id',
			name: 'coin-detail',
			component: CoinDetail
		}
	]
});
