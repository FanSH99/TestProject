import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '@/views/home.vue'

Vue.use(VueRouter);
// 定义路由匹配规则
let routes = [
    {
        name:"home",
        path:"/",
        component:()=>import("@/views/home.vue")
    },{
        name:"mine",
        path:"/mine/:name",
        // 路由懒加载 当匹配到当前路径时才会加载对应组件 作用：优化首屏加载速度
        component:()=>import("@/views/mine.vue")
    },{
        name:"cart",
        path:"/cart",
        component:()=>import("@/views/cart"),
        // 路由独享
        beforeEnter(to,from,next){
            console.log(to,".......................路由独享")
            console.log(from,".......................路由独享")
            next()
        }
    },{
        name:"login",
        path:"/login",
        component:()=>import("@/views/login")
    }
]
let router = new VueRouter({
    routes:routes
})

// 路由守卫 
/* 
三种：
1.全局路由守卫  全局解析路由守卫 全局前置路由守卫  全局后置路由守卫
2.组件内部路由守卫 beforeRouteEnter beforeRouteUpdate beforeRouteLeave
3.路由独享守卫 beforeEnter
*/
// 全局前置路由守卫
console.log(router)
router.beforeEach((to,from,next)=>{
// to表示将要去的路由信息独享
console.log(to,'---------------------------前置路由守卫to属性')
//  from 表示来源路由对象
console.log(from,'---------------------------前置路由守卫from属性')
if(to.path==='/cart'){
    if(localStorage.getItem("token")){
        return next()
    }else{
        return next("/login")
    }
}
    return next();
})
//后置路由守卫
router.afterEach((to,from)=>{
    // to表示将要去的路由信息独享
console.log(to,'---------------------------后置路由守卫to属性')
//  from 表示来源路由对象
console.log(from,'---------------------------后置路由守卫from属性')
})
export default router;
