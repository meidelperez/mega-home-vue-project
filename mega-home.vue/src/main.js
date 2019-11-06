import Vue from "vue";
import Home from "./views/Home.vue";
import store from "./store";
import router from "./router";
import Vuelidate from "vuelidate";
import Vuetify from "vuetify";
import vuetify from "@/plugins/vuetify";

import "vuetify/dist/vuetify.css";

Vue.use(Vuelidate);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  router,
  render: h => h(Home)
}).$mount("#home");
