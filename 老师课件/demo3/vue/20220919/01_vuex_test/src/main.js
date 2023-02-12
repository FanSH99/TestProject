import Vue from 'vue'
import App from './App.vue'
// 导入状态管理
import store from '@/store'
Vue.config.productionTip = false

new Vue({
  store:store,
  render: h => h(App),
}).$mount('#app')
