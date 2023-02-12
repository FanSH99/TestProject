import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
      path:"/",
      component:()=>import("@/views/home/index.vue")
    },  {
      path:"/cate",
      component:()=>import("@/views/cate/index.vue")
    },  {
      path:"/cart",
      component:()=>import("@/views/cart/index.vue")
    },  {
      path:"/mine",
      component:()=>import("@/views/mine/index.vue")
    },
]

const router = new VueRouter({
  routes
})

export default router
