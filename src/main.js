import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import VueClickAway from "vue3-click-away";

import "@/assets/scss/app.scss";
createApp(App)
  .use(VueClickAway)
  .use(VueAxios, axios)
  .use(store)
  .use(router)
  .mount("#app");
