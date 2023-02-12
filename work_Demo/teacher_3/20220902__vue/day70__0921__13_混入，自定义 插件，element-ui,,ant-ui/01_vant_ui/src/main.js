import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import { Button } from 'vant';
// Vue.use(Button);

// 方法2手动按需引入
// import Button from 'vant/lib/button';
// import 'vant/lib/button/style';

// 方法3 导入所有Vant  ----Tips: 配置按需引入后，将不允许直接导入所有组件。

import Vant from 'vant';
import 'vant/lib/index.css';
// 全局注册
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


/* 
2022年9月21日10:46:24

 npm i vant@latest-v2

*/
