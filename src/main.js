import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/images/icons/icons-import.js';
import Icon from '@/components/Icon';
Vue.component('Icon', Icon);

import VueClipboard from 'vue-clipboard2';
Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
