import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'https://elm.cangdu.org';
axios.defaults.timeout = 60000;

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

import Vant from 'vant';
import 'vant/lib/index.css';
// 全局注册
Vue.use(Vant);

import top from '@/components/Top.vue'
Vue.component("top", top);

import nearItem from '@/components/NearItem.vue'
Vue.component("nearItem", nearItem);

import loading from '@/components/Loading.vue';
Vue.component("loading", loading);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* 2022年9月22日14:48:19
 */