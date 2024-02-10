<template>
	<v-card class="mx-auto mt-10 pa-10" max-width="500">
		<v-card-title class="text-center">{{ thisProductTitle }}</v-card-title>
		<v-card-text>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. At est
			veritatis, illo, unde architecto quis veniam, officiis illum consequuntur
			cupiditate non dolorem? Inventore minus voluptatum perferendis eius nihil
			maiores vero. Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Inventore suscipit alias libero laudantium, praesentium accusamus odio
			dolorem minima at aliquam minus esse, tempora voluptatem culpa rerum
			reprehenderit obcaecati possimus ipsam.
		</v-card-text>
		<v-card-actions>
			<div class="mx-auto text-h3">
				<v-btn
					v-for="type in ['bug', 'information', 'help']"
					color="orange"
					class="text-h4"
					@click="setTicketType(type)"
				>
					<v-icon :icon="`mdi-${type}`"></v-icon>
				</v-btn>
			</div>
		</v-card-actions>
	</v-card>

	<v-dialog v-model="ticketSubmitionDialog" width="700px">
		<v-card class="px-5">
			<v-card-title class="mb-5 mt-5"> Submit New Ticket </v-card-title>
			<v-text-field
				v-model="ticketTitle"
				required
				label="Enter ticket title"
			></v-text-field>
			<v-textarea
				v-model="ticketDescription"
				required
				label="Enter ticket title"
			></v-textarea>
			<div class="mx-auto mb-10">
				<v-card-text>Please Choose Deadline:</v-card-text>
				<VueDatePicker v-model="deadline" />
			</div>
			<v-card-actions>
				<v-btn color="primary" @click="saveTicket">Save</v-btn>
				<v-btn color="primary" @click="ticketSubmitionDialog = false"
					>Close</v-btn
				>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import {
	getAllProductDataAndStore,
	submitTicketForProduct,
} from "@/controllers/ProductControllers/UniqueProductPageController";
export default {
	data() {
		return {
			thisProductId: this.$route.params.id,
			ticketType: "",
			ticketTitle: "",
			ticketDescription: "",
			deadline: "",
			ticketSubmitionDialog: false,
		};
	},
	mounted() {
		getAllProductDataAndStore(this.thisProductId);
	},
	computed: {
		thisProductTitle() {
			return localStorage.getItem("thisProductTitle");
		},
		thisProductDescription() {
			return localStorage.getItem("thisProductDescription");
		},
	},
	methods: {
		setTicketType(type) {
			this.ticketType = type;
			this.ticketSubmitionDialog = true;
		},
		saveTicket() {
			submitTicketForProduct(
				this.ticketTitle,
				this.ticketDescription,
				this.ticketType,
				this.deadline,
				this.ticketSubmitionDialog
			);
		},
	},
};
</script>
