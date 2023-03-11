<template>
  <div id="app">
        <div v-show="$store.state.isNav">
        <router-link to="/">首页</router-link>
        <router-link to="/mine">我的</router-link>
        <router-link to="/cart">购物车</router-link>
        </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
   
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
