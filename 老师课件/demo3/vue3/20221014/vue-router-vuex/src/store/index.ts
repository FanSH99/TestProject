// createStore 创建vuex状态管理实例
import { createStore } from 'vuex'
export default createStore({
  state: {
    num:100
  },
  getters: {
    getSum(state){
      return state.num*11
    } 
  },
  mutations: {
    add(state,n){
      state.num+=n
    }
  },
  actions: {

  },
  modules: {
    
  }
})
