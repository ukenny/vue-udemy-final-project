import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import PortalVue from "portal-vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { routes } from "./routes.js";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(PortalVue);

const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
