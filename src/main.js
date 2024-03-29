import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "virtual:svg-icons-register";
import Icon from "@/components/UI/Icon.vue";
Vue.component("Icon", Icon);

import Clipboard from "v-clipboard";
Vue.use(Clipboard);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	"render": h => h(App),
}).$mount("#app");
