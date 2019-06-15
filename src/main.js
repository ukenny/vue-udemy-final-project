import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import PortalVue from "portal-vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(PortalVue);

new Vue({
  render: h => h(App)
}).$mount("#app");
