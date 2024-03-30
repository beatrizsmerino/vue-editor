import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "virtual:svg-icons-register";
import UIIcon from "@/components/UI/UIIcon.vue";
Vue.component("UIIcon", UIIcon);

import Clipboard from "v-clipboard";
Vue.use(Clipboard);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	"render": h => h(App),
}).$mount("#app");
