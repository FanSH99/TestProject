import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: "/city",
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('@/views/CityView.vue')
  },
  {
    path: '/city/:id',
    name: 'cityinfo',
    component: () => import('@/views/CityInfo.vue')
  },
  {
    path: "/index/:geohash",
    name: "main",
    component: () => import("@/views/HomeView.vue"),
    redirect: "/home/:geohash",
    children: [
      {
        path: "/home/:geohash",
        name: "home",
        component: () => import("@/views/Waimai.vue"),
      },
      {
        path: "/search",
        name: "search",
        component: () => import("@/views/SearchView.vue"),
      },

      {
        path: "/shopping",
        name: "shopping",
        component: () => import("@/views/MyShoppingCar.vue"),
      },
      {
        path: "/mine",
        name: "mine",
        component: () => import("@/views/Mine.vue"),
      },
    ]
  },
  {
    path: "/shop/info/:id",
    name: "shopinfo",
    component: () => import("@/views/ShopInfo.vue"),
    // children: [
    //   {
    //     path: "/shop/info/:id",
    //     name: "shoplist",
    //     component: () => import("@/views/ShopListInfo.vue")
    //   },
    //   {
    //     path: "/shop/info/:id/rate",
    //     name: "ratelist",
    //     component: () => import("@/views/ShopRateInfo.vue")
    //   },

    // ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/cate/info",
    name: "cateinfo",
    component: () => import("@/views/CateInfo.vue")
  }


]

const router = new VueRouter({
  routes
})

export default router
