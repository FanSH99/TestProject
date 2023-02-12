// 引入vue 
import Vue from 'vue';
// 引入app跟组件
import App from './App.vue';
import router from './router/index.js'

// 创建vue实例
new Vue({
    el:"#app",
    // 注册路由
    router:router,
    // 将app跟组件挂载到页面
    render:(h)=>h(App)
})
