import Home from "../views/Home.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/brazil',
        name: 'Brazil',
        component: () => import(/* webpackChunkName: "brazil" */"../views/Brazil.vue")
    },
    {
        path: '/hawaii',
        name: 'Hawaii',
        component: () => import(/* webpackChunkName: "hawaii" */"../views/Hawaii.vue")
    },
    {
        path: '/jamaica',
        name: 'Jamaica',
        component: () => import(/* webpackChunkName: "jamaica" */"../views/Jamaica.vue")
    },
    {
        path: '/panama',
        name: 'Panama',
        component: () => import(/* webpackChunkName: "panama" */"../views/Panama.vue")
    },
    {
        path: '/destination/:id',
        name: 'destination.show',
        component: () => import(/* webpackChunkName: "destinationShow" */"../views/DestinationShow.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
