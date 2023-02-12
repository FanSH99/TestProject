<template>
  <div>
    <h1>子组件</h1>
    <button @click="sendMsg">向父组件传值</button>
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
let msg = ref("我是子组件中的数据")
// 使用defineEmits 创建一个时间发射器 参数为一个数组，数组中是自定义事件名称
let emit = defineEmits(["sendmsg","sendnum"])
function sendMsg(){
    // 使用时间发射器发送一个自定义事件 参数一自定义事件名称 参数二 将要传递的参数(可以是任意数据类型)
    emit("sendmsg",msg)
    emit("sendnum",100)
}
</script>
<style scoped lang='less'>
div{
    width: 100%;
    height: 200px;
    background-color: red;
}
</style>