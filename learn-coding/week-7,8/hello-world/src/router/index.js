import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import ListProfile from "@/components/ListProfile.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/list",
        name: "ListProfile",
        component: ListProfile,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;