<template>
  <div>
    <h1>我的  {{store.num}}</h1>
    <h1>getters传递参数{{store.getname("我叫")}}</h1>
  </div>
</template>
<script lang='ts' setup>
import {useStroe} from '../store/home'
let store = useStroe();
</script>
<style scoped lang='less'>
</style>