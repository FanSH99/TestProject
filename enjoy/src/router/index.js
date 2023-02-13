import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/HomeView.vue'),
    redirect: "/home",
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home'),
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/cart')
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('../views/mine')
      }
    ]
  },
  {
    path: "/info/:id",
    name: "info",
    component: () => import('@/views/info'),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login")
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/user")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/search")
  }


]

const router = new VueRouter({
  routes
})

// 路由前置守卫
router.beforeEach((to, from, next) => {
  // 判断当前是否访问的是订单页面或则确认订单页面
  if (to.path == '/cart' || to.path == '/mine') {
    // 判断当前用户状态是否登录
    if (localStorage.getItem("token")) {
      return next()
    } else {
      return next("/login")
    }
  }
  return next()
})


export default router
