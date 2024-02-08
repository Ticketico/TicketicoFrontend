<template>
	<v-toolbar color="primary">
		<v-tabs v-model="currentTab" align-tabs="title">
			<v-tab
				v-for="item in ['Dashboard', 'My Tickets', 'Edit Profile']"
				:key="item"
				:value="item"
			>
				{{ item }}
			</v-tab>
		</v-tabs>
	</v-toolbar>

	<DashboardTab v-if="currentTab == 'Dashboard'" />
	<EditProfileTab v-else-if="currentTab == 'Edit Profile'" />
	<MyTicketsTab v-else />
</template>

<script>
import DashboardTab from "@/components/dashboard/DashboardTab.vue";
import EditProfileTab from "@/components/dashboard/EditProfileTab.vue";
import MyTicketsTab from "@/components/dashboard/MyTicketsTab.vue";

export default {
	components: {
		DashboardTab,
		EditProfileTab,
		MyTicketsTab,
	},
	data() {
		return {
			currentTab: "Dashboard",
		};
	},
};
</script>
