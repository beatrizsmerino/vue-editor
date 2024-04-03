import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		"path": "/",
		"name": "Home",
		"component": () => import("../views/HomeView.vue"),
		"alias": "/home",
	},
	{
		"path": "/about",
		"name": "About",
		"component": () => import("../views/AboutView.vue"),
	},
	{
		"path": "/editors",
		"name": "Editors",
		"component": () => import("../views/EditorsView.vue"),
	},
];

const router = new VueRouter({
	"mode": "history",
	"base": import.meta.env.BASE_URL,
	routes,
});

export default router;
