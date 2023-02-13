import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入自定义插件
import myBtn from '@/plugins/myBtn'
Vue.use(myBtn);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* 
2022年9月21日16:47:33
*/