import routes from "@/routes.js";
import { createRouter, createWebHistory } from "vue-router";

export const routerInstance = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior: (to) => {
		return to.hash ? { selector: to.hash } : { x: 0, y: 0 };
	},
});

export function initVueRouter(app) {
	app.use(routerInstance);
}
