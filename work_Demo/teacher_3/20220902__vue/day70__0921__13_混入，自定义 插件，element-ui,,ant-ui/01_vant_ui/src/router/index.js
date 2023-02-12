import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/button",
    name: "button",
    component: () => import('@/views/ButtonView.vue')
  },
  {
    path: "/icon",
    name: "icon",
    component: () => import('@/views/IconView.vue')
  },
  {
    path: "/table",
    name: "table",
    component: () => import('@/views/TableView.vue')
  },
  {
    path: "/key",
    name: "key",
    component: () => import('@/views/KeyView.vue')
  },
  {
    path: "/form",
    name: "form",
    component: () => import('@/views/FormView.vue')
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import('@/views/MenuView.vue')
  },
  {
    path: "/time",
    name: "time",
    component: () => import('@/views/TimeView.vue')
  },
  {
    path: "/skeleton",
    name: "skeleton",
    component: () => import('@/views/SkeletonView.vue')
  },
  {
    path: "/step",
    name: "step",
    component: () => import('@/views/StepView.vue')
  },
  {
    path: "/tab",
    name: "tab",
    component: () => import('@/views/TabView.vue')
  },
  {
    path: "/card",
    name: "card",
    component: () => import('@/views/CardView.vue')
  },
  {
    path: "/free",
    name: "free",
    component: () => import('@/views/FreeView.vue')
  },
  {
    path: "/goods",
    name: "goods",
    component: () => import('@/views/GoodsView.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
