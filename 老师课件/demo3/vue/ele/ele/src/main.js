import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入自定义插件
import myComponent from '@/plugins/myComponent'
Vue.config.productionTip = false
Vue.use(myComponent)
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
// 图片懒加载
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/loadingimg.png'),
  loading: require('@/assets/loadingimg.png'),
  attempt: 1
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
