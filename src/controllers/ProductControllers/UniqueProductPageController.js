import axios from "axios";
import { routerInstance as router } from "@/plugins/vue-router";
import { toast } from "vue3-toastify";
export function getAllProductDataAndStore(id) {
	axios
		.get(`/product/${id}`)
		.then((res) => {
			storeThisProductData(res.data.message);
		})
		.catch((err) => {
			moveToDashboardPage();
		});
}

export function submitTicketForProduct(
	title,
	description,
	type,
	deadline,
	dialogState
) {
	const submitter_id = localStorage.getItem("myId");
	const product_id = localStorage.getItem("thisProductId");
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
			toast("Ticket Submitted Successfully");
			router.push(-1);
		})
		.catch(() => {
			dialogState = false;
			toast("Something Went Wrong", {
				type: "error",
			});
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

function getAllDataAndStore(id) {}
