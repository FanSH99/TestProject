import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    name: "home",
    path: "/",
    component: () => import("@/views/HomeView.vue")
  },
  {
    name: "homeinfo",
    path: "/homeinfo",
    component: () => import("@/views/HomeInfo.vue")
  },
  {
    name: "class",
    path: "/class",
    component: () => import("@/views/ClassView.vue")
  },
  {
    name: "classinfo",
    path: "/classinfo/:id/:name",
    component: () => import("@/views/ClassInfo.vue")
  },
  {
    name: "recommond",
    path: "/recommond",
    component: () => import("@/views/RecommondView.vue")
  },
  {
    name: "mine",
    path: "/mine",
    component: () => import("@/views/MineView.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
