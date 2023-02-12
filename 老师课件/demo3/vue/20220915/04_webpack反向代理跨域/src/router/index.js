// 引入Vue
import Vue from 'vue';
// 引入Vuerouter
import VueRouter from 'vue-router';
import Home from '../views/home.vue'
import Mine from '../views/mine.vue'
// 使用vue-router
Vue.use(VueRouter)
// 创建路由实例
let router = new VueRouter({
    routes:[
        {
            path:"/",
            name:"home",
            component:Home
        },{
            path:"/mine",
            name:"mine",
            component:Mine
        }
    ]
})

export default router;