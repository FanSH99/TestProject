import Vue from 'vue'
import App from './App.vue'
import componentChild from '@/components/componentChild';
Vue.config.productionTip = false
Vue.component("componentChild",componentChild)
new Vue({
  render: h => h(App),
}).$mount('#app')
