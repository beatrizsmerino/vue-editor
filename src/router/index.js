import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		"path": "/",
		"name": "Home",
		// eslint-disable-next-line function-paren-newline
		"component": () => import(

			/* webpackChunkName: "home" */
			"../views/Home.vue"
		// eslint-disable-next-line function-paren-newline
		),
	},
	{
		"path": "/home",
		"name": "Home",
		"component": () => import("../views/Home.vue"),
	},
	{
		"path": "/about",
		"name": "About",
		"component": () => import("../views/About.vue"),
	},
	{
		"path": "/editors",
		"name": "Editors",
		"component": () => import("../views/Editors.vue"),
	},
];

const router = new VueRouter({
	"mode": "history",
	"base": process.env.BASE_URL,
	routes,
});

export default router;
