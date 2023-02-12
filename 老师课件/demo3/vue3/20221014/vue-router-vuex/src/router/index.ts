// createRouter 用来创建vuerRouter实例 createWebHashHistory 用来获取hash 路由模式 createWebHistory history
import { createRouter, createWebHashHistory, RouteRecordRaw,createWebHistory} from 'vue-router'


// 定义路由匹配规则
const routes: Array<RouteRecordRaw> = [
   {
    path:"/",
    name:"home",
    component:()=>import("@/views/home.vue"),
    children:[
      {
        name:"login",
        path:"/login",
        component:()=>import('@/views/login.vue')
      }
    ]
   },
   {
    path:"/mine",
    name:"mine",
    component:()=>import("@/views/mine.vue")
   },{
    path:"/cart",
    name:"cart",
    component:()=>import('@/views/cart.vue')
   },{
    // 绑定动态属性
    path:"/about/:id",
    name:"about",
    component:()=>import("@/views/about.vue"),
   }
]
// 创建路由实例
const router = createRouter({
  // 设置路由 
  history: createWebHashHistory(),
  // 注册路由匹配规则
  routes:routes
})
// 路由首位
router.beforeEach((to,from,next)=>{
    console.log(to,'-----------')
    console.log(from,'++++++++++++++=')
    next();
})

// 添加新的路由匹配规则
router.addRoute({
  name:"new",
  path:"/new",
  component:()=>import("@/views/new.vue")
})

export default router
