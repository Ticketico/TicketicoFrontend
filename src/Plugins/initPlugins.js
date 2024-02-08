import "@/plugins/axios.js";
import { initVueRouter } from "@/plugins/router/vue-router.js";
import vuetify from "@/plugins/vuetify.js";
import pinia from "@/plugins/pinia.js";

export default (appInstance) => {
	initVueRouter(appInstance);
	vuetify(appInstance);
	pinia(appInstance);
};
