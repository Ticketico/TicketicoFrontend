import axios from "axios";
import { routerInstance as router } from "@/plugins/router/vue-router";

function HandleThisProductDetails(id) {
	axios
		.get(`/product/${id}`)
		.then((res) => {
			storeThisProductData(res.data.message);
		})
		.catch(() => {
			moveToDashboardPage();
		});
}
export default HandleThisProductDetails;

function storeThisProductData({ id, title, description, picture }) {
	localStorage.setItem("thisProductId", id);
	localStorage.setItem("thisProductTitle", title);
	localStorage.setItem("thisProductDescription", description);
	localStorage.setItem("thisProductPicture", picture);
}
function moveToDashboardPage() {
	router.push("/dashboard");
}
