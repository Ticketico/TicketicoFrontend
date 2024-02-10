<template>
	<v-card
		class="mx-auto pa-12 mt-10"
		elevation="3"
		max-width="500"
		rounded="xl"
		:loading="loading"
	>
		<div class="text-h2 mb-10">Signup</div>

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

		<v-text-field
			clearable
			type="password"
			density="comfortable"
			placeholder="confirm password"
			prepend-inner-icon="mdi-lock-outline"
			variant="outlined"
			v-model="confirmPassword"
		></v-text-field>

		<v-btn
			@click="HandleSignup(username, password, confirmPassword, loading)"
			block
			class="mb-5"
			color="blue"
			size="large"
			variant="elevated"
		>
			Sign up
		</v-btn>
	</v-card>
</template>

<script setup>
import HandleSignup from "@/controllers/AuthControllers/SignupController.js";

import {ref} from "vue"

const username = ref("")
const password = ref("")
const confirmPassword = ref("")
const loading = ref(false)
</script>
