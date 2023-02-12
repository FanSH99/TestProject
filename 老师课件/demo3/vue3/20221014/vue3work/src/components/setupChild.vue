<template>
  <div> 子组件 {{myname}} {{msg}}</div>
</template>

<script lang='ts' setup>
// 用来接受父组件传递的属性
let props = defineProps({
    myname:String,
    msg:String
})
console.log(props)
</script>
<style scoped lang='less'>
</style>