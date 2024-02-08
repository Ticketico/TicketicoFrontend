<template>
	<v-data-table-virtual
		:loading="loading"
		:headers="headers"
		:items="boats"
		height="400"
		item-value="title"
	></v-data-table-virtual>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			headers: [
				{ title: "Ticket Title", align: "start", key: "title" },
				{ title: "Ticket Id", align: "end", key: "id" },
				{ title: "Created At ", align: "end", key: "created_at" },
				{ title: "Deadline", align: "end", key: "deadline" },
			],
			boats: [
				{
					title: "idster",
					id: 35,
					created_at: 22,
					deadline: 300000,
				},
				{
					title: "OceanMaster",
					id: 25,
					created_at: 35,
					deadline: 500000,
				},
				{
					title: "Voyager",
					id: 20,
					created_at: 45,
					deadline: 700000,
				},
				{
					title: "WaveRunner",
					id: 40,
					created_at: 19,
					deadline: 250000,
				},
				{
					title: "SeaBreeze",
					id: 28,
					created_at: 31,
					deadline: 450000,
				},
				{
					title: "HarborGuard",
					id: 18,
					created_at: 50,
					deadline: 800000,
				},
				{
					title: "SlickFin",
					id: 33,
					created_at: 24,
					deadline: 350000,
				},
				{
					title: "StormBreaker",
					id: 22,
					created_at: 38,
					deadline: 600000,
				},
				{
					title: "WindSail",
					id: 15,
					created_at: 55,
					deadline: 900000,
				},
				{
					title: "FastTide",
					id: 37,
					created_at: 20,
					deadline: 280000,
				},
			],
		};
	},
};
</script>
