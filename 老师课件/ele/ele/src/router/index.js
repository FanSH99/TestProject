import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"/city"
  },
  {
    path:"/city",
    name:"city",
    component:()=>import("@/views/city")
  }, {
    path:"/city/:id",
    name:"citySearch",
    component:()=>import("@/views/searchCity")
  }, {
    path:"/index",
    name:"home",
    component:()=>import("@/views/home"),
    children:[
      {
        path:"/home",
        name:"takeout",
        component:()=>import("@/views/takeout")
      },
      {
        path:"/search",
        name:"search",
        component:()=>import("@/views/search")
      },
      {
        path:"/order",
        name:"order",
        component:()=>import("@/views/order")
      },
      {
        path:"/mine",
        name:"mine",
        component:()=>import("@/views/mine")
      }
    ]
  },{
    name:"cateInfo",
    path:'/cate/info',
    component:()=>import("@/views/cateInfo")
  },{
    name:"shopInfo",
    path:"/shop/info/:id",
    component:()=>import("@/views/shopInfo")
  },{
    name:"comOrder",
    path:"/com/order",
    component:()=>import("@/views/comfirmOrder")
  },{
    name:"login",
    path:"/login",
    component:()=>import("@/views/login")
  },{
    name:"paymant",
    path:"/pay",
    component:()=>import("@/views/payment")
  },{
    name:"userinfo",
    path:"/user/info",
    component:()=>import('@/views/userInfo')
  }
]

const router = new VueRouter({
  routes
})

// 路由前置守卫
router.beforeEach((to,from,next)=>{
  // 判断当前是否访问的是订单页面或则确认订单页面
  if(to.path=='/order' || to.path == '/com/order'){
    // 判断当前用户状态是否登录
    if(store.state.user_id){
     return next()
    }else{
      return next("/login")
    }
  }
  return next()
})
export default router
