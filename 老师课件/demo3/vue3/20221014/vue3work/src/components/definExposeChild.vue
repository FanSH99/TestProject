<template>
  <div>
    <h1>我是一个子组件</h1>
  </div>
</template>
<script lang='ts' setup>
// setup属性 默认不会给任意组件暴露任意属性
import { ref } from 'vue';
let num = ref(10000)

let init = ()=>{
    console.log("哈哈哈哈我被调用啦")
}
let msg = "好好学习"
// 将当前组件中指定属性或方法暴露给其它组件

defineExpose({
    num,
    init,
    msg
})
</script>
<style scoped lang='less'>
</style>