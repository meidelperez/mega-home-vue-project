import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export const myIcons = {
  wind: "fa fa-wind",
  fullHome: "fa fa-home",
  fourPoint: "fa fa-campground",
  roofCertification: "fa fa-certificate", // delete (e.g. v-chip close)
  clear: "",
  success: "",
  info: "",
  warning: "",
  error: "",
  prev: "",
  next: "",
  checkboxOn: "",
  checkboxOff: "",
  checkboxIndeterminate: "",
  delimiter: "", // for carousel
  sort: "",
  expand: "",
  menu: "",
  subgroup: "",
  dropdown: "",
  radioOn: "",
  radioOff: "",
  edit: ""
};
const opts = {
  icons: myIcons,
  iconfont: "fa"
};

export default new Vuetify(opts);
