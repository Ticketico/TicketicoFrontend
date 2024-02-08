import "@/plugins/axios.js";
import router from "@/plugins/router/vue-router.js";
import vuetify from "@/plugins/vuetify.js";
import pinia from "@/plugins/pinia.js";

export default (appInstance) => {
	router(appInstance);
	vuetify(appInstance);
	pinia(appInstance);
};
