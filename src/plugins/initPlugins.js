import "@/plugins/axios.js";
import { initVueRouter } from "@/plugins/vue-router.js";
import vuetify from "@/plugins/vuetify.js";
import datePicker from "@/plugins/datePicker";
export default (appInstance) => {
	initVueRouter(appInstance);
	vuetify(appInstance);
	datePicker(appInstance);
};
