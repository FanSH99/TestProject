import Vue from 'vue'
import App from './App.vue'

import router from './router/index.js'


Vue.config.productionTip = false

new Vue({
  el: "#app",
  router: router,
  render: h => h(App),
}).$mount("#app")
// 如果报错说找不到app 查看App.vue中导出是否有name:"App"（这个不加也行）和id=app(模板中)
