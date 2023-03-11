import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// 2022年9月16日14:12:50
// 当router里面文件有index.js，可以简写成@/router，默认会找@/router里面的index.js文件，如果文件名不叫index则必须带上名字。

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
