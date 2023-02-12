// console.log("项目已经启动了~~");

// npm -vue

// 引入vue

import Vue from 'vue';
import App from './App.vue';

import router from './router/index.js'
// 全局注册

// 创建vue实例
let vm = new Vue({
    el: "#app",
    router: router,
    // 渲染函数，会将渲染后的节点返回，即将app根组件挂载到页面上
    render: (h) => (h)(App),
   
})

console.log(vm);
