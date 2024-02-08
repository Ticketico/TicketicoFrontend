import "vue3-toastify/dist/index.css";

import axios from "axios";
import { toast } from "vue3-toastify";
import { routerInstance as router } from "@/plugins/router/vue-router";

function HandleLogin(username, password, loading) {
	loading = true;
	axios
		.post(getLoginRequestUrl(), getLoginRequestBody(username, password))
		.then((res) => {
			loading = false;
			showSuccessMessage();
			storeUserData(res.data.message);
			moveToDashboardPage();
		})
		.catch((err) => {
			loading = false;
			checkErrorTypeAndShowProperNotification(err);
		});
}

export default HandleLogin;

function getLoginRequestUrl() {
	return "/auth/login";
}

function getLoginRequestBody(username, password) {
	return {
		username,
		password,
	};
}
function showSuccessMessage() {
	toast("Login Successfully ...");
}
function moveToDashboardPage() {
	setTimeout(() => {
		router.push("/dashboard");
	}, 1000);
}
function checkErrorTypeAndShowProperNotification(error) {
	switch (error.response.data.message) {
		case "NEF":
			toast("Please Fill The Form!", {
				type: "error",
			});
			break;
		case "UOPIW":
			toast("Username Or Password Is Wrong!", {
				type: "error",
			});
			break;

		case "ISE":
			toast("Something Went Wrong!", {
				type: "error",
			});
			break;

		default:
			toast("Something Went Wrong!", {
				type: "error",
			});
			break;
	}
}

function storeUserData({ id, username, role, product_id }) {
	localStorage.setItem("myId", id);
	localStorage.setItem("myUsername", username);
	localStorage.setItem("myRole", role);
	if (!product_id) product_id = -1;
	localStorage.setItem("myProductId", product_id);
}
