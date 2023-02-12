import Vue from 'vue'
import App from './App.vue'
// 在vue脚手架中 若文件的入口文件为index.js则默认可以省略文件名称
import router from '@/router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
