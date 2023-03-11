<template>
    <div>
        <h1>购物车</h1>
    </div>
</template>
<script lang='ts' setup>
// 获取当前路由信息对象
import { useRoute } from 'vue-router'
let route = useRoute();
console.log(route);//响应式的数据

// 获取路由传递的参数。
console.log(route.query);//{name: '手机', price: '1999'}


</script>
<style lang='less' scoped>

</style>