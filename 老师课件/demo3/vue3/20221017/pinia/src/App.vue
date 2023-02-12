<template>
  <nav>
    <router-link to="/">首页</router-link> ｜
    <router-link to="/mine">我的</router-link> 
    |
    <router-link to="/cart">购物车</router-link>
  </nav>
  <div>
    <router-view></router-view>
  </div>
</template>
<script lang='ts' setup>
</script>
<style scoped lang='less'>
</style>