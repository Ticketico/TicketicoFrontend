import axios from "axios";
import { routerInstance as router } from "@/plugins/vue-router";
import { toast } from "vue3-toastify";
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
			toast("Ticket Submitted Successfully");
			router.push(-1);
			dialogState = false;
		})
		.catch(() => {
			toast.error("Something Went Wrong");
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
