import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSlider:false
  },
  getters: {
  },
  mutations: {
    changeSlider(state){
      state.isSlider = !state.isSlider
    }
  },
  actions: {
  },
  modules: {
  }
})
