import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/route";
import store from "./store/route";


createApp(App)
  .use(store)
  .use(router)  
  .mount("#app");
