<template>
    <div>
        <h1>子组件</h1>
        <button @click="sendMsg">向父组件传值</button>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';

let msg = ref("我是子组件中的数据")

let emit = defineEmits(["sendmsg", "sendnum"])

function sendMsg() {
    emit("sendmsg", msg)
    emit("sendnum", 100)
}
</script>
<style lang='less' scoped>

</style>