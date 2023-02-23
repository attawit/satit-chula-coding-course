import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import ListProfile from "@/components/VForComp.vue";
import FormView from "@/components/FormView.vue";

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/list",
        component: ListProfile,
    },
    {
        path: "/edit/:id",
        component: FormView,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;