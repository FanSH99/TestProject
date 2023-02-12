<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>{{num}}</h1>
    <button @click="num++">++</button>
    <router-view></router-view>
  </div>
</template>

<script>  

export default {
  name: 'App',
  data() {
    return {
      num:0
    }
  },
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
