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
import axios from "axios";
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
			loading = true;
			this.validatePassword(this.password, this.confirmPassword);
			axios
				.post("/auth/register", {
					username: this.username,
					password: this.password,
					confirmPassord: this.confirmPassword,
				})
				.then(() => {
					this.loading = false;
					toast.success("Registered Successfully!");
					setTimeout(() => {
						router.push("/login");
					}, 1000);
				})
				.catch(() => {
					this.loading = false;
					toast.error("Something went wrong!");
				});
		},
		validatePassword(password, confirmPassord) {
			const regex =
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
			if (!regex.test(password)) throw "please choose a stronger password!";
			if (password !== confirmPassord)
				throw "confirmation password does not match!";
		},
	},
};
</script>
