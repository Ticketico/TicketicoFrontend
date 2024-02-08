// Index
const MainPage = () => import("@/pages/MainPage.vue");

//Authentication
const Login = () => import("@/pages/Auth/Login.vue");
const Signup = () => import("@/pages/Auth/Signup.vue");

//Product
const MyProduct = () => import("@/pages/ProductProfile/MyProduct.vue");
const UniqueProductPage = () =>
	import("@/pages/ProductProfile/UniqueProductPage.vue");
const EditProduct = () => import("@/pages/ProductProfile/EditProduct.vue");

//Tickets
const Ticket = () => import("@/pages/Tickets/Ticket.vue");
const CreateTicket = () => import("@/pages/Tickets/CreateTicket.vue");

//404 Page
const PageNotFound = () => import("@/pages/404/NotFoundPage.vue");

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
