<template>
  <div>
    <h1>{{num}}</h1>
    <button @click="num++"> ++</button>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
// 引入生命周期组合Api;
import {onBeforeMount,onMounted,onBeforeUpdate,onUpdated} from 'vue'
export default defineComponent({
    // 相当于vue2的 创建前创建后这两个生命周期
    setup(){
    let num = ref(0)
     onMounted(()=>{
        console.log("组件渲染后")
     })
      onBeforeMount(()=>{
        console.log("组件渲染前")
      })
     onBeforeUpdate(()=>{
        console.log("更新前")
     })
     onUpdated(() => {
       console.log("更新后") 
     })

     return {
        num

     }
    },

})
</script>
<style scoped>
</style>