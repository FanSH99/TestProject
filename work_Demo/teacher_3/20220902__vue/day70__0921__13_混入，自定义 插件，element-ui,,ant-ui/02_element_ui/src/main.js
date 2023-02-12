import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import { Button, Select } from 'element-ui';

/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

// import useElement from '@/elementui'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* 
2022年9月21日14:15:47

NUTUI 京东组件库
element-ui 饿了么旗下
antdv.com

*/