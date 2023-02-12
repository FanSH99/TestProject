<template>
  <div>
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/mine">我的</router-link> |
      <router-link to="/cart">购物车</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';

</script>
<style>

</style>