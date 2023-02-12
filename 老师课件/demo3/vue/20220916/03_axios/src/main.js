import Vue from 'vue'
import App from './App.vue'
import '@/assets/font-awesome-4.7.0/css/font-awesome.css'
// 引入axios
import axios from 'axios';
// 设置默认请求地址 设置后每次发送请求都会携带该地址
axios.defaults.baseURL = 'https://api.it120.cc';
// 设置请求超时时间
axios.defaults.timeout=60000;
// 请求拦截 每次发送请求给服务器之前都会被拦截
// interceptors 拦截器
axios.interceptors.request.use((config)=>{
  console.log("我拦截到了",config)
  config.headers.Authorization='token'
   return config
  // if(登陆了){ 
  //   继续请求
  // }else{
  //   跳转到登录页面
  // }
})
// 响应拦截 
axios.interceptors.response.use((res)=>{
  console.log("响应拦截到啦")
  return res
})
Vue.config.productionTip = false
// 将axios添加到vue原型属性上
Vue.prototype.$axios = axios;
new Vue({
  render: h => h(App),
}).$mount('#app')
