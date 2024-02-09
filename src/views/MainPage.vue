<template>
	<v-tabs v-model="currentTab" align-tabs="center" class="my-10">
		<v-tab
			v-for="item in [
				'Dashboard',
				'My Tickets',
				'My Profile',
				'Register/Manage Product',
			]"
			:key="item"
			:value="item"
		>
			{{ item }}
		</v-tab>
	</v-tabs>

	<DashboardTab v-if="currentTab == 'Dashboard'" />
	<MyTicketsTab v-else-if="currentTab == 'My Tickets'" />
	<EditProfileTab v-else-if="currentTab == 'My Profile'" />
	<MyProduct v-else-if="currentTab == 'Register/Manage Product'" />
	
</template>

<script setup>
import { ref } from "vue";

import DashboardTab from "@/components/MainPage/DashboardTab.vue";
import EditProfileTab from "@/components/MainPage/EditProfileTab.vue";
import MyTicketsTab from "@/components/MainPage/MyTicketsTab.vue";
import MyProduct from "@/components/MainPage/MyProduct.vue";

const currentTab = ref("Dashboard");
</script>
