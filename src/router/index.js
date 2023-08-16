import Home from "../views/Home.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () => import(/* webpackChunkName: "destinationShow" */"../views/DestinationShow.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
