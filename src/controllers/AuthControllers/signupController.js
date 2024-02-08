import "vue3-toastify/dist/index.css";

import axios from "axios";
import { toast } from "vue3-toastify";
import { routerInstance as router } from "@/plugins/router/vue-router";

function HandleSignup(username, password, confirmPassword, loading) {
	loading = true;
	axios
		.post(
			getSignupRequestUrl(),
			getSignupRequestBody(username, password, confirmPassword)
		)
		.then(() => {
			loading = false;
			showSuccessMessage();
			moveToLoginPage();
		})
		.catch((err) => {
			loading = false;
			showProperErrorMessage(err);
		});
}

export default HandleSignup;

function getSignupRequestUrl() {
	return "/auth/signup";
}

function getSignupRequestBody(username, password, confirmPassword) {
	return {
		username,
		password,
		confirmPassword,
	};
}
function showSuccessMessage() {
	toast("Signup Successfully ...");
}
function moveToLoginPage() {
	setTimeout(() => {
		router.push("/login");
	}, 1000);
}
function showProperErrorMessage(error) {
	switch (error.response.data.message) {
		case "UAE":
			toast("Username Already Exists!", {
				type: "error",
			});
			break;
		case "NEF":
			toast("Please Fill The Form!", {
				type: "error",
			});
			break;
		case "ISE":
			toast("Something Went Wrong!", {
				type: "error",
			});
			break;
		case "PAIW":
			toast("Please Choose a Stronger Password!", {
				type: "error",
			});
			toast(
				"Your password must contain numbers, uppercases, lowercases, special characters!",
				{
					type: "error",
					autoClose: 6000,
				}
			);
		case "PAICDM":
			toast("Password and Its Confirmation Does Not Match!", {
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
