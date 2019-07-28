import Vue from "vue";
import LandingComponent from "./components/LandingComponent.vue";
import ScheduleComponent from "./components/ScheduleComponent.vue";
import StandardScheduleComponent from "./components/StandardScheduleComponent.vue";
import NavComponent from "./components/NavComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// https://router.vuejs.org/guide/#javascript

const routes = [
    { path: "/", component: LandingComponent },
    { path: "/accounts/login", component: LoginComponent },
    { path: "/:streamer", component: ScheduleComponent }
];

// https://router.vuejs.org/guide/essentials/history-mode.html
const router = new VueRouter({
    mode: "history",
    routes
});

Vue.component("hello-component", LandingComponent);
Vue.component("standard-schedule", StandardScheduleComponent);
Vue.component("top-nav", NavComponent);

const app = new Vue({
    el: "#app",
    router
});
