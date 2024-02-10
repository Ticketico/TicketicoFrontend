<template>
	<v-card
		class="mx-auto pa-12 mt-10"
		elevation="3"
		max-width="500"
		rounded="xl"
		:loading="loading"
	>
		<div class="text-h2 mb-10">Login</div>

		<v-text-field
			clearable
			density="comfortable"
			placeholder="username"
			prepend-inner-icon="mdi-account-outline"
			variant="outlined"
			v-model="username"
		></v-text-field>

		<v-text-field
			clearable
			type="password"
			density="comfortable"
			placeholder="password"
			prepend-inner-icon="mdi-lock-outline"
			variant="outlined"
			v-model="password"
		></v-text-field>

		<v-btn
			@click="HandleLogin(username, password, loading)"
			block
			class="mb-5"
			color="blue"
			size="large"
			variant="elevated"
		>
			Log In
		</v-btn>
	</v-card>
</template>

<script setup>
import HandleLogin from "@/controllers/AuthControllers/LoginController.js";

import { ref } from "vue";

const username = ref("");
const password = ref("");
const loading = ref(false);
</script>
