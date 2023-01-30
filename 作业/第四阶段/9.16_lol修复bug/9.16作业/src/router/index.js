import Vue from 'vue';

// 引入VueRouter模块
import VueRouter from 'vue-router';
// 引入home.vue组件
//  import home from '../views/home.vue';
// import info from '../views/info.vue';
// import herolist from '../components/herolist.vue';
// import classlist from '../components/classlist.vue';
// import shoppingcar from '../components/shoppingcar.vue'
// import mine from '../components/mine.vue';



// 使用vueRouter
Vue.use(VueRouter);

let routes = [
    {
        name: "home",
        path: "/",
        component: () => import("@/views/home.vue"),
        redirect: "/films/herolist",
        children: [
            {
                name: "films/herolist",
                path: "/films/herolist",
                component: () => import("@/components/herolist.vue"),
                beforeEnter(to, from, next) {
                    if (to != from) {
                        next()
                    }
                }
            },
            {
                name: "films/shoppingcar",
                path: "/films/shoppingcar",
                component: () => import("@/components/shoppingcar.vue"),
                beforeEnter(to, from, next) {
                    if (to != from) {
                        next()
                    }
                }
            },
            {
                name: "films/classlist",
                path: "/films/classlist",
                component: () => import("@/components/classlist.vue"),
                beforeEnter(to, from, next) {
                    if (to != from) {
                        next()
                    }
                }
            },
            {
                name: "films/mine",
                path: "/films/mine",
                component: () => import("@/components/mine.vue"),
                beforeEnter(to, from, next) {
                    if (to != from) {
                        next()
                    }
                }
            }
        ]
    },
    {
        name: "info",
        path: "/info/:id",
        component: () => import("@/views/info.vue"),
        beforeEnter(to, from, next) {
            console.log(to, from);
            if (to != from) {
                next()
            }
        }
    },

]
let router = new VueRouter({
    routes: routes
});




export default router;