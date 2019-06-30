import Vue from "vue";
import LandingComponent from "./components/LandingComponent.vue";
import ScheduleComponent from "./components/ScheduleComponent.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// https://router.vuejs.org/guide/#javascript

const routes = [{ path: "/:streamer", component: ScheduleComponent }];

// https://router.vuejs.org/guide/essentials/history-mode.html
const router = new VueRouter({
    mode: "history",
    routes
});

Vue.component("hello-component", LandingComponent);

const app = new Vue({
    el: "#app",
    router
});
