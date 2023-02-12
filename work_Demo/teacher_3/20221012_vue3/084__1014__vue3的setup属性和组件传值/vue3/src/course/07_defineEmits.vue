<template>
    <div class="parent">
        <h1>父组件</h1>
        <p>{{mymsg}}--{{mynum}}</p>
    </div>
    <mychild @sendmsg="getmsg" @sendnum="getnum"></mychild>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
// 2022年10月14日14:05:23
import mychild from '@/components/defineEmitsChild.vue'

interface Msg {
    value: string
}
let mymsg = ref("")
let mynum = ref()
function getmsg(msg: Msg) {
    console.log(msg);
    mymsg.value = msg.value
}

function getnum(num: number) {
    console.log(num);
    mynum.value = num;

}
</script>
<style lang='less' scoped>
.parent {
    width: 100%;
    height: 200px;
    background: red;
}
</style>