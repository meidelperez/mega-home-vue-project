import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Vuelidate from "vuelidate";
import Vuetify from "vuetify";
import vuetify from "@/plugins/vuetify";

import "material-design-icons/iconfont/material-icons.css";
import "vuetify/dist/vuetify.css";

Vue.use(Vuelidate);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
