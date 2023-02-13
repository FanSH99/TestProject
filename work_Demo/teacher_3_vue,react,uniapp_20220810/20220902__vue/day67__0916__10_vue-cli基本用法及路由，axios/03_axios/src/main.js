import Vue from 'vue'
import App from './App.vue'
// 2022年9月16日16:27:48

import '@/assets/font-awesome-4.7.0/css/font-awesome.css'

import axios from 'axios';
// 设置默认请求地址，设置后每次发送请求你都会携带改地址。---名称不要写错。
axios.defaults.baseURL = 'https://api.it120.cc';

// 设置请求超时时间，60000毫秒=60秒
axios.defaults.timeout = 60000;

// 请求拦截，每次发送请求时都会被拦截。被拦截之前不会发送到服务器。--例如判断是否登录。
// config就是拦截到的请求。
axios.interceptors.request.use((config) => {
  console.log("我拦截到请求了", config);
  // 添加请求字段
  config.headers.Authorization = 'token';
  return config;
 /* 
  if(登录){
 继续请求
 }else{
 跳转页面。
 }

 */
})

// 响应拦截
axios.interceptors.response.use((res) => {
  console.log("响应数据拦截到了");
  // 可以提前判断当前是否请求成功。---res就是拦截到的返回数据。
  return res
})




Vue.config.productionTip = false
// 将axios添加到原型属性上，则所有组件都可使用axios
Vue.prototype.$axios=axios

new Vue({
  render: h => h(App),
}).$mount('#app')

/* 
发送请求方式

1. xhr
 let xhr=new XMLHttpRequest()
 xhr.on("get","")
 xhr.send();
 
2.Ajax 基于jquery

3.axios 一个轻量级的http请求库。

axios有什么特点？
https://www.axios-http.cn/

特性

    从浏览器创建 XMLHttpRequests
    从 node.js 创建 http 请求
    支持 Promise API
    拦截请求和响应
    转换请求和响应数据
    取消请求
    自动转换JSON数据
    客户端支持防御XSRF

    安装
使用 npm:
$ npm install axios
使用 bower:
$ bower install axios
使用 yarn:
$ yarn add axios
使用 jsDelivr CDN:
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

*/