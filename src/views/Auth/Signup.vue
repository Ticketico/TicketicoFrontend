<template>
	<v-card
		class="mx-auto pa-12 mt-10"
		elevation="8"
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
			@click="Signup"
			block
			class="mb-5"
			color="blue"
			size="large"
			variant="elevated"
		>
			Sign up
		</v-btn>

		<v-card-text class="text-center">
			<a class="text-blue text-decoration-none text-h6" href="/login">
				Already Have an Account <v-icon icon="mdi-chevron-right"></v-icon>
			</a>
		</v-card-text>
	</v-card>
</template>

<script>
import HandleSignup from "@/controllers/AuthControllers/SignupController.js";

export default {
	data() {
		return {
			username: "",
			password: "",
			confirmPassword: "",
			loading: false,
		};
	},
	methods: {
		Signup() {
			HandleSignup(
				this.username,
				this.password,
				this.confirmPassword,
				this.loading
			);
		},
	},
};
</script>
