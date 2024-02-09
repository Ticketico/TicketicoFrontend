<template>
	<v-sheet width="500" class="mx-auto">
		<v-form>
			<v-text-field v-model="title" label="Product Title"></v-text-field>

			<v-textarea
				variant="filled"
				label="Product Description"
				v-model="description"
			></v-textarea>

			<v-btn @click="createNewProduct" block color="blue" class="mt-2"
				>Add Product</v-btn
			>
		</v-form>
	</v-sheet>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			title: "",
			description:
				"The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.",
		};
	},
	methods: {
		createNewProduct() {
			axios.post("/product", {
				title: this.title,
				description: this.description,
				admin_id: localStorage.getItem("myId"),
			});
		},
	},
};
</script>
