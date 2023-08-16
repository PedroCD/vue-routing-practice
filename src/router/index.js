import Home from "../views/Home.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */"../views/About.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
