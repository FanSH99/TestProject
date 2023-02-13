// 2022年9月15日09:55:52
// 引入vue模块
import Vue from 'vue';

// 引入VueRouter模块
import VueRouter from 'vue-router';
// 引入home.vue组件
import home from '../views/home.vue'
// 引入mine.vue组件
import mine from '../views/mine.vue'

// 使用vueRouter
Vue.use(VueRouter)
// 创建vue路由实例
let router = new VueRouter({
    routes: [
        {
            path: '/',
            name: "home",
            component:home
        },
        {
            path: "/mine",
            name: "mine",
            component:mine
        }
    ]
})
export default router;