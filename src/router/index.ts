import Vue from "vue";
import VueRouter, { Route } from "vue-router";
import pageHome from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: pageHome,
		meta: {
			title: "Vue Preset"
		}
	},
	
];

// @ts-ignore
const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

// @ts-ignore
router.beforeEach((to: Route, from: Route, next) => {
	document.title = to.meta.title;
	next();
});
export default router;
