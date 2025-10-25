import { createRouter, createWebHistory } from "vue-router";

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

const router = createRouter({
	"history": createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
