import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/brother',
    name: 'brother',
    component: () => import('../views/BrotherView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
