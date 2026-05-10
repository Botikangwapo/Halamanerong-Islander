import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import WhatWeDo from "../views/What We Do.vue";
import Contact from "../views/Contact.vue";
import fqa from "../views/frequentlyaskques.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/WhatWeDo',
        name: 'WhatWeDo',
        component: WhatWeDo
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/fqa',
        name: 'fqa',
        component: fqa
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,

    scrollBehavior() {
        return {
            top: 0,
            behavior: 'smooth'
        }
    }
})

export default router