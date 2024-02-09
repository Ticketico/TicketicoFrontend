import axios from "axios";
import { routerInstance as router } from "@/plugins/vue-router";

export function HandleUniqueProductDetails(id) {
	console.log(id);
	axios
		.get(`/product/${id}`)
		.then((res) => {
			storeThisProductData(res.data.message);
		})
		.catch((err) => {
			moveToDashboardPage();
		});
}

export function SubmitTicketForProduct(
	title,
	description,
	type,
	deadline,
	dialogState
) {
	deadline, submitter_id, product_id;
	axios
		.post("/ticket", {
			title,
			description,
			type,
			deadline,
			submitter_id,
			deadline,
			product_id,
		})
		.then(() => {
			dialogState = false;
		})
		.catch(() => {
			dialogState = false;
		});
}

function storeThisProductData(productData) {
	const { id, title, description } = productData;
	localStorage.setItem("thisProductId", id);
	localStorage.setItem("thisProductTitle", title);
	localStorage.setItem("thisProductDescription", description);
}
function moveToDashboardPage() {
	router.push("/dashboard");
}
