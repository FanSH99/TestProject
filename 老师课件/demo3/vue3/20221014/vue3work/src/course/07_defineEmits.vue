<template>
  <div class="prent">
    <h1>父组件 {{mymsg}}</h1>
    <mychild @sendmsg="getmsg" @sendnum="getnum"></mychild>
  </div>
</template>
<script lang='ts' setup>
import mychild from '@/components/defineEemitsChild.vue'
import { ref } from 'vue';
interface Msg{
    value:string
}
let mymsg = ref("")
function getmsg(msg:Msg){
    console.log(msg)
    mymsg.value = msg.value;
}
function getnum(num:number){
    console.log(num)
}
</script>
<style scoped lang='less'>
.prent{
    width: 100%;
    height: 500px;
    background-color: blue;
}
</style>