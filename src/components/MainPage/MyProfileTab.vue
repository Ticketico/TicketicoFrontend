<template>
	<v-sheet width="500" class="mx-auto">
		<v-form>
			<v-text-field v-model="oldPassword" label="Old Password" />
			<v-text-field v-model="newPassword" label="New Password" />
			<v-text-field
				v-model="newPasswordConfirmation"
				label="New Password Confirmation"
			/>

			<v-btn block color="blue" class="mt-2">Edit Password</v-btn>
		</v-form>
	</v-sheet>
</template>

<script setup>
import { ref } from "vue";
const oldPassword = ref("");
const newPassword = ref("");
const newPasswordConfirmation = ref("");
</script>
