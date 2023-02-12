import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// 引入加载mockjs
import mymock from '@/utils/mock'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
