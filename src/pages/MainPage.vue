<template>
	<v-toolbar color="primary">
		<v-tabs :value="this.currentTab" @input="changeTab" align-tabs="title">
			<v-tab
				v-for="item in ['Dashboard', 'My Tickets', 'Edit Profile']"
				:key="item"
			>
				{{ item }}
			</v-tab>
		</v-tabs>
	</v-toolbar>

	<DashboardTab v-if="tabStore.currentTab == 'Dashboard'" />
	<EditProfileTab v-else-if="tabStore.currentTab == 'Edit Profile'" />
	<MyTicketsTab v-else />
</template>

<script>

import AllTabs from "@/components/dashboard/header/AllTabs.vue";
import DashboardTab from "@/components/dashboard/body/DashboardTab.vue";
import EditProfileTab from "@/components/dashboard/body/EditProfileTab.vue";
import MyTicketsTab from "@/components/dashboard/body/MyTicketsTab.vue";

export default {
	components: {
		DashboardTab,
		EditProfileTab,
		MyTicketsTab,
		AllTabs,
	},
	data() {
		return {
			currentTab: "My Tickets",
		};
	},
};
</script>
