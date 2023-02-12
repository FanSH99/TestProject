import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import loading from '@/components/loading'
// 引入axios
import axios from 'axios';
axios.defaults.baseURL = '/douyu';
// 引入图标样式库
import "@/assets/font-awesome-4.7.0/css/font-awesome.css"
Vue.config.productionTip = false
// 将axios挂在到vue原型属性
Vue.prototype.$axios = axios;
Vue.component("loading", loading)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
