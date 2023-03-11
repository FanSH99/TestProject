import Vue from 'vue'
import App from './App.vue'
// 导入状态管理。
import store  from '@/store/index.js'

Vue.config.productionTip = false

new Vue({
  // 全局注册store状态管理。
  store:store,
  render: h => h(App),
}).$mount('#app')


/* 
2022年9月19日09:37:13
下载vuex^3.0.0版本，版本太高的话vue2用不了。
src下面创建story文件夹用来保存vuex的配置文件
store里面引入vue vuex Vue.use(vuex)
main.js里引入store文件夹。
main.js里注册store
let store=new Vuex.store({
  state:{
  num:0
  list:{}
  }
})
state里面即为存放的共享数据。
引用state的数据需要先导入store下文件，后直接用$store.state.num来引用即可，
也可以导入vuex下的mapState，将计算属性后面的对象替代为mapState,在mapState里面用引号引入store.state下的同名数据即可。
如import {mapState} from 'vuex'
computed:mapState({
  "num"
})
更改数据的话在store.mutations里写方法。
在methods里用this.$store.commit提交到更改方法里，
第一个参数是方法名（与store.mutations里方法名一致），第二个参数是提交的数据。
 如this.$store.commit("setNum",5)

*/