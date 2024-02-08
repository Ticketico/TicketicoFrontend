<template>
	<v-card class="mx-auto pa-12" elevation="10" max-width="600" rounded="large">
		<v-card-text class="text-h6 font-weight-bold">
			Please Enter Product Link To Go ...</v-card-text
		>

		<div class="d-flex">
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
		</div>
	</v-card>
</template>

<script setup>
import { ref } from "vue";

const productLink = ref("");

function navigateToProductPage() {
	if (this.productLink.includes("https://"))
		window.location.replace(this.productLink);
	else window.location.replace("https://" + this.productLink);
}
</script>
