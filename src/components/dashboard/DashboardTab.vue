<template>
	<v-card
		class="mx-auto pa-12 d-flex"
		elevation="10"
		max-width="500"
		rounded="large"
	>
		<v-text-field
			class="mr-3"
			density="comfortable"
			placeholder="Product Link"
			prepend-inner-icon="mdi-cart-outline"
			variant="outlined"
			v-model="productLink"
		></v-text-field>

		<v-btn
			@click="navigateToProductPage"
			color="blue"
			size="large"
			variant="tonal"
		>
			GO
		</v-btn>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			productLink: "",
		};
	},
	methods: {
		navigateToProductPage() {
			if (this.productLink.includes("https://"))
				window.location.replace(this.productLink);
			else window.location.replace("https://" + this.productLink);
		},
	},
};
</script>
