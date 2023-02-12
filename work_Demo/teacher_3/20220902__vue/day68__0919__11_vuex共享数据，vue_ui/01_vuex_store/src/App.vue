<template>
  <div id="app">
   <mycomponent></mycomponent>
   <mycomponent-one></mycomponent-one>
   <button @click="add">num++</button>
   <button @click="$store.commit('setList','不知秋')">添加用户</button>
  </div>
</template>

<script>

import mycomponent from '@/components/MyComponent.vue';
import mycomponentOne from '@/components/MyComponentOne.vue';
export default {
  name: 'App',
  components: {
    mycomponent,
    mycomponentOne
  },
  methods: {
    add() {
      // 这种方法状态虽然可以改变，但是vuex不推荐直接更改状态值，因为在严格模式下直接更改会报错。
      // this.$store.state.num++
      // 使用this.$store.commit提交到muations，参数1要提交的方法，参数2要传递的参数。
      this.$store.commit("setNum",5)
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
