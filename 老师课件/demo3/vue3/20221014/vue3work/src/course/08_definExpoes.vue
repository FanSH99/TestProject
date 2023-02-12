<template>
  <div>
     <mychild ref="childRef"></mychild>
     <button @click="getChild">获取组件实例</button>
  </div>
</template>
<script lang='ts' setup>
import mychild from '@/components/definExposeChild.vue'
import { ref } from 'vue';
let childRef = ref()
let getChild = ()=>{
    console.log(childRef)
    // .value.属性名获取子组件中暴露出来的属性
    console.log(childRef.value.num)
    childRef.value.init();
    console.log(childRef.value.msg)
}
</script>
<style scoped lang='less'>

</style>