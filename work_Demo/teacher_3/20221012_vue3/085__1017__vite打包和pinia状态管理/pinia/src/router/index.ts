// createRouter 用来创建Vue-router实例。
// createWebHasHistory用来获取hash路由模式
// RouteRecordRaw定义路由匹配规则的类型别名。
// createWebHistory---需要后端配置，用这个没有#号。会发送请求给后端。
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


// 定义路由匹配规则
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import("@/views/home.vue")
    },
    {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/mine.vue')
    },
    {
        path: "/cart",
        name: "cart",
        component: () => import("@/views/cart.vue")
    },


]

// 创建路由实例
const router = createRouter({
    // 设置路由模式，hash模式。
    history: createWebHashHistory(),
    // 注册路由匹配规则，routes:routes
    routes
})




export default router
