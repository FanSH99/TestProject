<template>
  <div>
    <h1>购物车页面</h1>
  </div>
</template>
<script lang='ts' setup>
// 获取路由传递query参数
import {useRoute} from 'vue-router';
// 获取当前路由信息对象
let route = useRoute();
console.log(route)
// 获取路由query传递的参数
console.log(route.query)
</script>
<style scoped lang='less'>
</style>