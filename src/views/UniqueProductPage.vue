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
				<v-btn color="orange" class="text-h4" @click="submitBug">
					<v-icon icon="mdi-bug"></v-icon>
				</v-btn>
				<v-btn color="orange" class="text-h4" @click="submitInformation">
					<v-icon icon="mdi-information"></v-icon>
				</v-btn>
				<v-btn color="orange" class="text-h4" @click="submitQuestion">
					<v-icon icon="mdi-help"></v-icon>
				</v-btn>
			</div>
		</v-card-actions>
	</v-card>

	<v-dialog v-model="ticketSubmissionDialog" width="700px">
		this is dadlinge {{ deadline }}
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
				<v-card-text>Please Choose Deadline</v-card-text>
				<v-date-picker
					v-model="deadline"
					color="primary"
					elevation="24"
				></v-date-picker>
			</div>
			<v-card-actions>
				<v-btn color="primary" @click="SubmitTicket">Save</v-btn>
				<v-btn color="primary" @click="ticketSubmissionDialog = false"
					>Close</v-btn
				>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import {
	HandleUniqueProductDetails,
	SubmitTicketForProduct,
} from "@/controllers/ProductControllers/UniqueProductPageController";
export default {
  watch: {
  },
	data() {
		return {
			ticketSubmissionDialog: false,
			ticketType: "",
			ticketTitle: "",
			ticketDescription: "",
			deadline: new Date().toISOString,
		};
	},
	mounted() {
		HandleUniqueProductDetails(this.$route.params.id);
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
		submitBug() {
			this.ticketType = "bug";
			this.ticketSubmissionDialog = true;
		},
		submitInformation() {
			this.ticketType = "information";
			this.ticketSubmissionDialog = true;
		},
		submitQuestion() {
			this.ticketType = "question";
			this.ticketSubmissionDialog = true;
		},
		SubmitTicket() {
			SubmitTicketForProduct(
				this.ticketTitle,
				this.ticketDescription,
				this.ticketType,
				this.deadline,
				this.ticketSubmissionDialog
			);
		},
		cl(e) {
			console.log(e);
		},
	},
};
</script>
