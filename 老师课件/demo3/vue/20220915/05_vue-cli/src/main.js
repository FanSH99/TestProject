// 引入vuejs
import Vue from 'vue'
// 引入 app 根组件
import App from './App.vue'
import router from './router/index.js'
// 设置模式
Vue.config.productionTip = false
// 创建vue实例
new Vue({
  router,
  // 将跟组件渲染
  render: h => h(App),
}).$mount("#app")
// 将vue 实例挂载到 #app标签
