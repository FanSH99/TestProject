import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "首页",
    isSlider: false,
    offset: 20,

  },
  getters: {
  },
  mutations: {
    changeSlider(state) {
      console.log("11111");
      state.isSlider = !state.isSlider;
    },
   
  },
  actions: {
  },
  modules: {
  }
})
