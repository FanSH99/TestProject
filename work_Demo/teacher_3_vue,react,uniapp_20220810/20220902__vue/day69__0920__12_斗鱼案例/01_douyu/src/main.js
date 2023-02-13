import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import loading from "@/components/Loading.vue";
import roomItem from '@/components/RoomItem.vue'

Vue.component("loading", loading);
Vue.component("roomItem", roomItem);
// 引入图标样式库
import "@/assets/font-awesome-4.7.0/css/font-awesome.css"
// 引入axios
import axios from 'axios'
import VueRouter from 'vue-router';

axios.defaults.baseURL = "/douyu/api/RoomApi";

// 将axios挂在原型上
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
