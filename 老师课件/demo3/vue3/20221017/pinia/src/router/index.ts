import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
let routes:Array<RouteRecordRaw> = [
    {
        path:"/",
        name:"home",
        component:()=>import("@/views/home.vue")
    },{
        path:"/mine",
        name:"mine",
        component:()=>import('@/views/mine.vue')
    },{
        path:"/cart",
        component:()=>import("@/views/cart.vue")
    }
]
let router = createRouter({
    routes,
    history:createWebHashHistory()
})

export default router;