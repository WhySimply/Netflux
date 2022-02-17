import {createWebHistory, createRouter} from "vue-router";
import Home from "@/views/Home.vue";
import List from "@/views/List.vue";
import Favorites from "@/views/Favorites";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/list",
        name: "List",
        component: List,
    },
    {
        path: "/favorites",
        name: "Favorites",
        component: Favorites,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;