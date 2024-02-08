import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default function (app) {
	app.use(Vue3Toastify, {
		autoClose: 2000,
		type: "success",
	});
}
