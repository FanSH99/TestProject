<template>
  <div>
    <h1>购物车页面</h1>
    <ul>
        <li v-for="(item,index) in store.list" :key="index">{{item}}</li>
    </ul>
  </div>
</template>
<script lang='ts' setup>
import {usecartStore} from '../store/cart'
let store = usecartStore();
console.log(store)
</script>
<style scoped lang='less'>
</style>