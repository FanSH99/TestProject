
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import navList from './nav';
// import { useStore } from 'vuex';
// let store = useStore();
// console.log(store);//undefined
// useStore,useRouter,useRoute等组合Api必须结合setup属性使用。否则不能用。


import Nprogress from 'nprogress';
import 'nprogress/nprogress.css'
import store from '../store';
// console.log(store);

let routes: Array<RouteRecordRaw> = [
    {
        name: "layout",
        path: "/",
        component: () => import("../views/layout/index.vue"),
        redirect: "/home",
        children: [
            {
                name: "home",
                path: "/home",
                component: () => import("../views/home/index.vue")
            },
            {
                name: "users",
                path: "/users",
                component: () => import("../views/users/index.vue")
            },
            {
                name: "roles",
                path: "/roles",
                component: () => import("../views/roles/index.vue")
            },
            {
                name: "rights",
                path: "/rights",
                component: () => import("../views/rights/index.vue")
            },
            {
                name: "goods",
                path: "/goods",
                component: () => import("../views/goods/index.vue")
            },
            {
                name: "addgoods",
                path: "/addgoods",
                component: () => import("../views/addgoods/index.vue")
            },
            {
                name: "params",
                path: "/params",
                component: () => import("../views/params/index.vue")
            },
            {
                name: "categories",
                path: "/categories",
                component: () => import("../views/categories/index.vue")
            },
            {
                name: "orders",
                path: "/orders",
                component: () => import("../views/orders/index.vue")
            },
            {
                name: "reports",
                path: "/reports",
                component: () => import("../views/reports/index.vue")
            },

        ]
    },
    {
        name: "login",
        path: "/login",
        component: () => import("../views/login/index.vue")
    }
]

let router = createRouter({
    routes,
    history: createWebHashHistory()
})

// 全局路由守卫拦截判断当前用户是否登录。若未登陆强制跳转到登录页面

router.beforeEach((to, from, next) => {
    let name: Patnname = to.name;
    let list = navList[name];
    store.commit("setNavList", list)
    // 开始加载页面进度条
    Nprogress.start();
    if (to.path != '/login') {
        // 判断当前用户是否登录
        if (store.state.token) {
            return next();
        }
        return next("/login")
    }
    return next();
})

router.afterEach((to, from) => {
    Nprogress.done();
})

export default router;