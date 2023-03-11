import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "amfe-flexible"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* 
2022年9月22日09:03:25

px单位一般用来做pc端。不能适配移动端。

1.rem移动端适配。
rem单位是以html标签的字体大小来计算的。默认是16px
比如html标签的font-size=54px
则1rem=54px
比如设计每个屏幕不同设置不同的html对应不同的font-size其他大小均用rem来计量。

npm i amfe-flexible -save-dev
import "amfe-flexible"
npm i postcss-pxtorem
项目根目录下建立postcss.config.js
    plugins: {
        'postcss-pxtorem': {
            // 设计稿尺寸 10rem=750px 设计稿一般是750px或者37.5px
            rootValue: 75,
            propList: ['*'],
        }
    }


2.vm移动端适配
100vm是一个屏幕宽。100vh是一个屏幕高。百分比布局。

*/