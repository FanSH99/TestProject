import Vue from 'vue';
import VueRouter from 'vue-router';
// import home from '@/views/home.vue';
Vue.use(VueRouter);
// 可以分开写。定义路由匹配规则。
let routes = [
    {
        name: "home",
        path: "/",
        // component: home
        component: () => import("@/views/home.vue")
    },
    {
        name: "mine",
        path: "/mine",
        // 引入乳尖的另一种方法----建议用这个方法来引入，这样性能更高，执行速度更快。
        // 这个方法叫做路由懒加载，当匹配到当前路径才会引入，所以执行速度更快。否则每个页面都会全部加载一遍速度慢。
        // 好处：优化首屏加载速度。
        component: () => import("@/views/mine.vue"),
        

    },
    {
        name: "car",
        path: "/car",
        // component: home
        component: () => import("@/views/car.vue"),
        beforeEnter(to, from, next) {
            console.log(to, from);
            if (localStorage.getItem("name")) {
                return next()
            } else {
                return next("login");
            }
            return next()
        }
    },
    {
        name: "login",
        path: "/login",
        // component: home
        component: () => import("@/views/login.vue"),
       

    },

];

let router = new VueRouter({
    routes: routes
})

// 前置路由守卫。
router.beforeEach((to, from, next) => {
    console.log(to,'--------------前置路由守卫to');//to表示要去的地方，即要访问的页面，将要去的路由信息对象。
    console.log(from,'---------------前置路由守卫from');//from表示来源，从那个页面过来的。
    next();//这句表示放行，即开放访问权限。
})
// 后置路由守卫。
router.afterEach((to, from) => {
    // 只有前置放行进来之后才会调用。否则不调用。，前置和后置的to及form一样的。
    console.log(to,'--------------后置路由守卫to');
    console.log(from,'--------------后置路由守卫from');
})
// 组件内部
// 后置路由守卫
export default router;

// 最好叫index.js
/* 
## 什么是路由守卫
路由守卫分为3种。
1.全局路由守卫。---无论那个发生改变都能监测
    全局路由守卫又分为下面两种
    1）全局解析路由守卫 
    2）全局前置路由守卫 
        router是一个路由实例。里面有3个全局狗子。----beforeEach 
        里面的参数一个回调函数
    3）全局后置路由守卫
2.组件内部路由守卫。---只有访问改组件才会拦截到信息
3.路由独享守卫。 ---只有访问路由时才会拦截。
*/