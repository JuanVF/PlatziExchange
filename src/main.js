import Vue from 'vue';
import Chartkick from 'vue-chartkick';
import { VueSpinners } from '@saeris/vue-spinners';
import Chart from 'chart.js';

import App from '@/App.vue';
import router from '@/router';
import { dolarFilter, percentFilter } from '@/filters';

import '@/assets/css/tailwind.css';

Vue.filter('dolar', dolarFilter);
Vue.filter('percent', percentFilter);

Vue.use(VueSpinners);
Vue.use(Chartkick.use(Chart));

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
