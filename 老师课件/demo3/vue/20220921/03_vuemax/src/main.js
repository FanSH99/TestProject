import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import myBtn from '@/plugins/myBtn';

// 注册插件
Vue.use(myBtn)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
