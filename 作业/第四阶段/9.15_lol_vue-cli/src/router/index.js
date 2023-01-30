import Vue from 'vue';

// 引入VueRouter模块
import VueRouter from 'vue-router';
// 引入home.vue组件
import home from '../views/home.vue';
import info from '../views/info.vue';
import herolist from '../components/herolist.vue';
import classlist from '../components/classlist.vue';
import shoppingcar from '../components/shoppingcar.vue'
import mine from '../components/mine.vue';


// 使用vueRouter
Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            name: "home",
            path: "/",
            component: home,
            redirect: "/films/herolist",
            children: [
                {
                    name: "films/herolist",
                    path: "/films/herolist",
                    component: herolist,

                },
                {
                    name: "films/shoppingcar",
                    path: "/films/shoppingcar",
                    component: shoppingcar,

                },
                {
                    name: "films/classlist",
                    path: "/films/classlist",
                    component: classlist,
                },
                {
                    name: "films/mine",
                    path: "/films/mine",
                    component: mine
                }
            ]
        },
        {
            name: "info",
            path: "/info/:id",
            component: info,
        },

    ]
});

export default router;