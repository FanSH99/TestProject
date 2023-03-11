import Vue from 'vue'
// RouteConfig是一个规范。
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('@/views/mine/index.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/cart/index.vue')
  },
  {
    path: '/cate',
    name: 'cate',
    component: () => import('@/views/cate/index.vue')
  },
  {
    path: "/info/:id",
    name: "info",
    component: () => import("@/views/info/index.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
