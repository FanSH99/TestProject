import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import myComponent from '@/plugins/myComponent'
Vue.use(myComponent);

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

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

/* 2022年10月5日17:01:36 

发短信，打电话可以用a标签实现。
例如:
<a href="tel:123454">打电话</a>
<a href="sms:123454">发短信</a>
 <a href = “mailto:xxxxx@163.com”>给我们发送邮件</a>

 用js的话
 window.location.href = "tel://10086";
 window.location.href = "sms://10086";
 window.location.href = "mailto://10086@111.com";
*/