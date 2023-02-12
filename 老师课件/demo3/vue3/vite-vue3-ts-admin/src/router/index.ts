import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router';
import Nprogress from 'nprogress';
import "nprogress/nprogress.css";
import navList from './nav';
// useRouter useRoute useStore 这三个组合Api必须结合setup属性
// 引入状态管理实例
import store from '../store';
console.log(store)
let routes:Array<RouteRecordRaw> = [
    {
        name:"layout",
        path:"/",
        component:()=>import("../views/layout/index.vue"),
        // 路由重定向
        redirect:"/home",
        children:[
            {
                name:"home",
                path:"/home",
                component:()=>import("../views/home/index.vue")
            },  {
                name:"users",
                path:"/users",
                component:()=>import("../views/users/index.vue")
            },  {
                name:"roles",
                path:"/roles",
                component:()=>import("../views/roles/index.vue")
            },{
                name:"rights",
                path:"/rights",
                component:()=>import("../views/rights/index.vue")
            },{
                name:"goods",
                path:"/goods",
                component:()=>import("../views/goods/index.vue")
            },{
                name:"params",
                path:"/params",
                component:()=>import("../views/params/index.vue")
            },{
                name:"categories",
                path:"/categories",
                component:()=>import("../views/categories/index.vue")
            },{
                name:"orders",
                path:"/orders",
                component:()=>import("../views/orders/index.vue")
            },{
                name:"reports",
                path:"/reports",
                component:()=>import("../views/reports/index.vue")
            },{
                name:"addGoods",
                path:"/addGoods",
                component:()=>import("../views/addGoods/index.vue")
            }
        ]
    },{
        name:"login",
        path:"/login",
        component:()=>import("../views/login/index.vue")
    }
]

let router = createRouter({
    routes,
    history:createWebHashHistory()
})

// 使用全局路由守卫判断当前用户登录状态若未登录则强制跳转登录页面
router.beforeEach((to:Params,from,next)=>{
    let name:Patnname = to.name;
    let list = navList[name];
    store.commit("setNavList",list)
    // 开始加载页面进度条
    Nprogress.start();
    if(to.path !='/login'){
        // 判断当前用户是否登录
        if(store.state.token){
            return next();
        }
        return next("/login")
    }
    return next();
})
router.afterEach((to,from)=>{
    Nprogress.done();
})
export default router;