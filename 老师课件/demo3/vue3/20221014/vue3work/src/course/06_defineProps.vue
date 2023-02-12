<template>
  <div>
    <h1>父组件</h1>
    <setup-child :myname="name" :msg="msg"></setup-child>
  </div>
</template>

<script lang='ts' setup>
import setupChild from '@/components/setupChild.vue'
import { ref } from 'vue';
let name = ref("张三")
let msg = ref("好好学习天天向上")
</script>
<style scoped lang='less'>

</style>