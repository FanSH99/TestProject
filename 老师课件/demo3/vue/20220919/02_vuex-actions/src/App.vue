<template>
  <div id="app">
    <div v-show='$store.state.isNav'>
      <router-link to='/'>首页</router-link> | 
      <router-link to='/mine'>我的</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>

</style>
