// 创建vuex仓库，状态管理实例。
import { createStore } from 'vuex'

// 原先写法，import Vuex from 'vuex' export defalt new Vuex.store({})
export default createStore({
  state: {
    num: 100
  },
  getters: {
    getSum(state) {
      return state.num += 1
    }
  },
  mutations: {
    add(state, num) {
      state.num += num
    }
  },
  actions: {
  },
  modules: {
  }
})
