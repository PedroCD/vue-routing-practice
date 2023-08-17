import Home from "../views/Home.vue";
import {createRouter, createWebHistory} from "vue-router";
import NotFound from "@/views/NotFound.vue";
import sourceData from '@/data.json';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/destination/:id/:slug',
        name: 'destination.show',
        component: () => import(/* webpackChunkName: "destinationShow" */"../views/DestinationShow.vue"),
        props: (route) => ({...route.params, id: parseInt(route.params.id)}),
        children: [
            {
                path: ':experienceSlug',
                name: 'experience.show',
                component: () => import(/* webpackChunkName: "experienceShow" */"../views/ExperienceShow.vue"),
                props: (route) => ({...route.params, id: parseInt(route.params.id)})
            }
        ],
        beforeEnter(to, from){
            const exists = sourceData.destinations.find(destination => destination.id === parseInt(to.params.id))

            if (!exists) return {
                name: 'NotFound',
                params: {pathMatch: to.path.split('/').slice(1)},
                query: to.query,
                hash: to.hash
            }
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "notFound" */"../views/NotFound.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => resolve({top: 0, behavior: 'smooth'}), 300)
        })
    }
})

export default router;
