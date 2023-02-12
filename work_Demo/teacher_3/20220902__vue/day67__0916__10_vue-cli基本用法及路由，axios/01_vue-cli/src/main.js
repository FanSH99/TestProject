import Vue from 'vue'
import App from './App.vue'

// 引入要注册的文件组件
import componentChild from '@/components/componentChild'

Vue.config.productionTip = false

// 全局注册组件componentChild
Vue.component("componentChild", componentChild)

new Vue({
  render: h => h(App),
}).$mount('#app')
