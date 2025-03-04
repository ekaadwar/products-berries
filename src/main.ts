import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./assets/main.css";
import i18n from "./i18n";
import FontAwesomeIcon from "./plugins/fontawesome";

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(i18n);
app.use(router);
app.use(createPinia());
app.mount("#app");
