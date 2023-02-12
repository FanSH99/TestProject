import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
    routes: [
        {
            name: "home",
            path: "/",
            component: () => import("@/views/home")
        }, {
            name: "mine",
            path: "/mine",
            component: () => import("@/views/mine")
        }, {
            name: "cart",
            path: "/cart",
            component: () => import("@/views/cart")
        }
    ]
})

export default router;