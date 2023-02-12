<template>
  <div>
    <h1>我是另一个组件</h1>
    <button @click="senmsg">向令一个子组件发送数据</button>
  </div>
</template>
<script>
import bus from '@/bus';
export default {
  data(){
    return {
     sum:10000  
    }
  },
  methods:{
    senmsg(){
        bus.$emit("getsum",this.sum)
    }
  }
}
</script>
<style>
</style>