import "vue3-toastify/dist/index.css";

import axios from "axios";
import { toast } from "vue3-toastify";
import { routerInstance as router } from "@/plugins/vue-router";

export default function HandleSignup(
	username,
	password,
	confirmPassword,
	loading
) {
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
			checkErrorTypeAndShowProperNotification(err);
		});
}

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
		location.reload();
	}, 1000);
}
function checkErrorTypeAndShowProperNotification(error) {
	switch (error.response.data.message) {
		case "NEF":
			toast("Please Fill The Form!", {
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
			break;
		case "PAICDM":
			toast("Passwords Do Not Match!", {
				type: "error",
			});
			break;
		case "UAE":
			toast("Username Already Exists!", {
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
