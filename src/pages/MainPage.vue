<template>
	<v-tabs v-model="currentTab" align-tabs="center" class="my-10">
		<v-tab
			v-for="item in [
				'Dashboard',
				'My Tickets',
				'My Profile',
				'Register New Product',
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
	<RegisterNewProductTab v-else-if="currentTab == 'Register New Product'" />
</template>

<script>
import DashboardTab from "@/components/dashboard/DashboardTab.vue";
import EditProfileTab from "@/components/dashboard/EditProfileTab.vue";
import MyTicketsTab from "@/components/dashboard/MyTicketsTab.vue";
import RegisterNewProductTab from "@/components/dashboard/RegisterNewProductTab.vue";

export default {
	components: {
		DashboardTab,
		EditProfileTab,
		MyTicketsTab,
		RegisterNewProductTab,
	},
	data() {
		return {
			currentTab: "Dashboard",
		};
	},
};
</script>
