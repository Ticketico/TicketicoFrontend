import "@/plugins/axios.js";
import { initVueRouter } from "@/plugins/router/vue-router.js";
import vuetify from "@/plugins/vuetify.js";

export default (appInstance) => {
	initVueRouter(appInstance);
	vuetify(appInstance);
};
