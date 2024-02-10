<template>
	<v-container>
		<v-row>
			<v-col v-for="ticket in ticketsList" :key="ticket">
				<v-card class="mx-auto" max-width="344">
					<v-card-title> Ticket Title: Top western road trips </v-card-title>

					<v-card-subtitle> CreatedAt:adfadsf </v-card-subtitle>
					<v-card-subtitle> Deadline:asdfkmadslfk </v-card-subtitle>

					<v-card-actions>
						<v-btn color="orange-lighten-2" variant="text"> Show </v-btn>
						<v-btn
							color="orange-lighten-2"
							variant="text"
							@click="showDescription(ticket.id)"
						>
							Description
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>

	<v-dialog v-model="showDescriptionDialog" width="auto">
		<v-card>
			<v-card-text>{{ descriptionOfChosenTicket }}</v-card-text>
			<v-card-actions>
				<v-btn color="primary" block @click="showDescriptionDialog = false"
					>Ok</v-btn
				>
			</v-card-actions>
		</v-card>
	</v-dialog>

	<v-dialog v-model="loadingDialog" scrim width="200">
		<v-card color="blue">
			<v-card-text>
				Please Wait ...
				<v-progress-linear indeterminate class="my-3"></v-progress-linear>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	data() {
		return {
			ticketsList: [
				{ id: 1, description: "this is 1" },
				{ id: 2, description: "this is 2" },
				{ id: 3, description: "this is 3" },
				{ id: 4, description: "this is 4" },
				{ id: 5, description: "this is 5" },
				{ id: 6, description: "this is 6" },
				{ id: 7, description: "this is 7" },
				{ id: 8, description: "this is 8" },
				{ id: 9, description: "this is 9" },
			],
			showDescriptionDialog: false,
			descriptionOfChosenTicket: "",
			loadingDialog: false,
		};
	},
	methods: {
		showDescription(ticketId) {
			this.showDescriptionDialog = true;
			this.descriptionOfChosenTicket = this.ticketsList.filter(
				(ticket) => ticket.id === ticketId
			)[0].description;
		},
	},
};
</script>
