import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


/* 
2022年9月22日09:38:29

1.npm i  postcss-px-to-viewport --save-dev
2.项目根目录下新建postcss.config.js
3.postcss.config.js中写
module.exports = () => {
    return {
        plugins: {
            autoprefixer: {},
            'postcss-px-to-viewport': {
                viewportWidth:375,
                  exclude: /(\/|\\)(node_modules)(\/|\\)/ // 第三方UI组件单位不转vw
            },
        }
    }
}
4.写样式时一屏幕宽为375px即为1屏幕宽。
*/