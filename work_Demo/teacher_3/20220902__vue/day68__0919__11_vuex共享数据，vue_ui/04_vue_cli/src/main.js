import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* 
vue create '名称'
Manually select features (上下箭头选择) enter进入
选择balel router,vuex Css Pre-processsors
上下箭头选择，空格键选中，enter下一步

*/