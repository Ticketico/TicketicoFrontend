//Main App
import { createApp } from "vue";
import App from "./App.vue";

//Initiate Plugins
import initPlugins from "@/plugins/initPlugins.js"

//App Instantiate
const appInstance = createApp(App);
initPlugins(appInstance)
appInstance.mount("#app");
