import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      name:"home",
      path:"/",
      component:()=>import("@/views/home.vue")
    },   {
      name:"cate",
      path:"/cate",
      component:()=>import("@/views/cate.vue")
    },   {
      name:"tuijian",
      path:"/tuijian",
      component:()=>import("@/views/tuijian.vue")
    },   {
      name:"mine",
      path:"/mine",
      component:()=>import("@/views/mine.vue")
    },{
      name:"roomInfo",
      path:"/info",
      component:()=>import("@/views/info")
    },{
      name:"cateInfo",
      path:"/cateInfo/:id/:catename",
      component:()=>import("@/views/cateInfo")
    }
]

const router = new VueRouter({
  routes
})

export default router
