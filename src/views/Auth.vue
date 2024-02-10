<template>
	<v-tabs v-model="currentTab" align-tabs="center" class="my-10">
		<v-tab v-for="item in ['Login', 'Signup']" :key="item" :value="item">
			{{ item }}
		</v-tab>
	</v-tabs>

	<Login v-if="currentTab == 'Login'" />
	<Signup v-else-if="currentTab == 'Signup'" />
</template>

<script setup>
import { ref } from "vue";

import Login from "@/components/Auth/Login.vue";
import Signup from "@/components/Auth/Signup.vue";

const currentTab = ref("Dashboard");
</script>
