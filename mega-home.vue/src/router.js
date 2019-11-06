import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import FullHome from "./views/full-home.vue";
import NotFound from "./views/notFound.vue";
import FourPoint from "./views/4-point.vue";
import RoofCertification from "./views/roof-certification.vue";
import WindMitigation from "./views/wind-mitigation.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/full-home",
    name: "full-home",
    component: FullHome
  },
  {
    path: "/4-point",
    name: "4-point",
    component: FourPoint
  },
  {
    path: "/roof-certification",
    name: "roof-certification",
    component: RoofCertification
  },
  {
    path: "/windstorm-mitigation",
    name: "windstorm-mitigation",
    component: WindMitigation
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
  },
  {
    path: "*",
    name: "not-found-page",
    component: NotFound
  }
];

export default new Router({
  routes,
  mode: "history"
});
