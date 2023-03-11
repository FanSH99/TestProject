
// createApp用来擦混构建vue实例
import { createApp } from 'vue'
// 引入根组件
// import App from './App.vue'
// 更改根组件，将组件展示到页面上。
import App from './course/05_watch监听属性.vue'
// 调用createApp方法即可创建实例并将vue实例挂在到#app上
createApp(App).mount('#app')

/* 
2022年10月12日10:18:46

vue2 创建vue实例的写法
import Vue from 'vue';
import App from './App.vue'

new Vue({
    render:(h)=>h(App)
}).$mount('#app')
 */

// 作业：1.三级城际联动。2.商品列表管理过滤。