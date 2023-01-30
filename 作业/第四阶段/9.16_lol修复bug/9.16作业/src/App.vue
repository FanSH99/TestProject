<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
<script>
  // 2022年9月16日17:52:53
export default {
  name: 'App',
  data() {
    return {
      msg: "dddd",
      num: 0,
    }
  },

}

</script>
<style>
#app {
  width: 1200px;
  margin: 0 auto;
}
</style>