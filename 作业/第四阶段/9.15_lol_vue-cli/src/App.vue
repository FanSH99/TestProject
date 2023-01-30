<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
  // 2022年9月15日20:00:22
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