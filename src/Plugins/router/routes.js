// Index
const MainPage = () => import("@/views/MainPage.vue");

//Authentication
const Login = () => import("@/views/Auth/Login.vue");
const Signup = () => import("@/views/Auth/Signup.vue");

//Product
const MyProduct = () => import("@/views/ProductProfile/MyProduct.vue");
const UniqueProductPage = () =>
	import("@/views/ProductProfile/UniqueProductPage.vue");
const EditProduct = () => import("@/views/ProductProfile/EditProduct.vue");

//Tickets
const Ticket = () => import("@/views/Tickets/Ticket.vue");
const CreateTicket = () => import("@/views/Tickets/CreateTicket.vue");

//404 Page
const PageNotFound = () => import("@/views/404/NotFoundPage.vue");

const routes = [
	{
		path: "/",
		name: "Home",
		redirect: "/login",
	},
	{
		path: "/login",
		name: "login",
		component: Login,
	},
	{
		path: "/signup",
		name: "signup",
		component: Signup,
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: MainPage,
	},
	// {
	// 	path: "/myProduct",
	// 	name: "My Product",
	// 	component: MyProduct,
	// },
	// {
	// 	path: "/editProduct/:id",
	// 	name: "Edit Product",
	// 	component: EditProduct,
	// },
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
