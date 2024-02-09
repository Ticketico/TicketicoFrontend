// Index
const MainPage = () => import("@/views/MainPage.vue");
const Auth = () => import("@/views/Auth.vue");

const routes = [
	{
		path: "/",
		name: "home",
		redirect: "/auth",
	},
	{
		path: "/auth",
		name: "auth",
		component: Auth,
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: MainPage,
	},
	// {
	// 	path: "/product/:id/view",
	// 	name: "Business Product",
	// 	component: UniqueProductPage,
	// },
	// {
	// 	path: "/submitTicket/:ticketType",
	// 	name: "Submit New Ticket",
	// 	component: CreateTicket,
	// },
	// {
	// 	path: "/product/:productId/ticket/:ticketId",
	// 	name: "ticket",
	// 	component: Ticket,
	// },
];

export default routes;
