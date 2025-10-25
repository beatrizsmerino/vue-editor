import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import DefaultLayout from "@/layouts/DefaultLayout.vue";
import UIButton from "@/components/UI/UIButton.vue";
import UIIcon from "@/components/UI/UIIcon.vue";

import "virtual:svg-icons-register";

import Clipboard from "v-clipboard";

const app = createApp(App);

app.component("DefaultLayout", DefaultLayout);
app.component("UIButton", UIButton);
app.component("UIIcon", UIIcon);

app.use(router);
app.use(store);
app.use(Clipboard);

app.mount("#app");
