// 引入创建vue实例的方法 createApp
import { createApp } from 'vue'
// 引入根组件
import App from './coures/05_watch监听的使用.vue'

// 创建vue实例并将vue实例挂在到#app
createApp(App).mount('#app')

// import Vue from 'vue';
// import App from './App.vue';
// new Vue({
//     render:(h)=>h(App)
// }).$mount("#app")