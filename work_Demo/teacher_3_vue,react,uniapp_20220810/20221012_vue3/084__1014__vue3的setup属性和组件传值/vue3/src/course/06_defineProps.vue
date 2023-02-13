<template>
    <div>
        <h1>父组件</h1>
        <input type="text" v-model="msg" placeholder="消息">
        <input type="text" v-model="name" placeholder="名称">
        <button @click="send">发送</button>
        <setup-child :myname="name" :obj="obj" />
    </div>
</template>
<script lang='ts' setup>
import { reactive, ref } from 'vue';
import setupChild from '@/components/definePropsChild.vue'

let name = ref("");
let msg = ref("");
let obj = reactive({
    name: '',
    msg: '',
})
let send = () => {
    obj.name = name.value;
    obj.msg = msg.value;
}
</script>
<style lang='less' scoped>

</style>