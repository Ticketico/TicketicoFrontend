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
	<v-dialog v-model="showDialog" width="auto">
		<v-card>
			<v-card-text>{{ descriptionOfChosenTicket }}</v-card-text>
			<v-card-actions>
				<v-btn color="primary" block @click="showDialog = false">Ok</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	data() {
		return {
			ticketsList: [
				{
					id: 1,
					description: "this is 1",
				},
				{ id: 2, description: "this is 2" },
			],
			showDialog: false,
			descriptionOfChosenTicket: "",
		};
	},
	methods: {
		showDescription(ticketId) {
			this.showDialog = true;
			this.descriptionOfChosenTicket = this.ticketsList.filter(
				(ticket) => ticket.id === ticketId
			)[0].description;
		},
	},
};
</script>
