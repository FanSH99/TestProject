import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import About from '../views/about.vue';
Vue.use(VueRouter);
let router = new VueRouter({
    routes:[
        {
            path:"/",
            component:Home
        },{
            path:"/about",
            component:About
        }
    ]
})

export default router;