<template>
  <div>
    <!-- childRef是一个响应式数据 -->
    <mychild ref="childRef" />
    <button @click="getChild">获取组件实例</button>
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
// 2022年10月14日14:22:11
import mychild from '@/components/defineExpoesChild.vue'



// ref()默认接收any任意属性。
let childRef = ref();

let getChild = () => {
  console.log(childRef);//RefIml
  console.log(childRef.value.num.value);//undefined
  // 如果是响应式数据，可以用.value.数据名获取。
  console.log(childRef.value.num);//100
  console.log(childRef.value.init);
  /*    () => {console.log("我被调用了");} */
  console.log(childRef.value.msg);//红红火火恍恍惚惚


}
</script>
<style lang='less' scoped>

</style>