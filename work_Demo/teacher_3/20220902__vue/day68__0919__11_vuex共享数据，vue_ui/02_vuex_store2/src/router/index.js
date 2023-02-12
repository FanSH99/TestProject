import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let routes = [
    {
        name: "home",
        path: "/",
        component:()=>import("@/views/Home.vue")
    },
    {
        name: "mine",
        path: "/mine",
        component:()=>import("@/views/Mine.vue")
    },
    {
        name: "cart",
        path: "/cart",
        component:()=>import("@/views/Cart.vue")
    }
]

let router = new VueRouter({
    routes,
})

export default router;