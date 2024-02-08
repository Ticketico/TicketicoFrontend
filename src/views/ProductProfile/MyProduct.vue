<template>
	<div v-if="!role">
		<register-product />
	</div>
	<div v-else>
		<AdminProductPage />
		<all-admin-tickets />
	</div>
</template>

<script>
import RegisterProduct from "@/views/ProductProfile/RegisterProduct.vue";
import AdminProductPage from "@/views/ProductProfile/AdminProductPage.vue";
import AllAdminTickets from "@/views/Tickets/AllAdminTickets.vue";

export default {
	components: {
		RegisterProduct,
		AllAdminTickets,
		AdminProductPage
	},
	computed: {
		role() {
			const role = localStorage.getItem("role");
			return role == "null" ? "" : role;
		},
	},
};
</script>
