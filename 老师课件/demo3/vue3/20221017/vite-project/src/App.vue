<template>
  <div>
    <h1>hello vite  {{num}}</h1>
    <button @click="num++">++</button>
    <child></child>
  </div>
</template>
<script lang='ts' setup>
import child from '@/components/child.vue'
import axios from "axios";
import { ref } from 'vue';
let num = ref(0);
//反向代理跨域请求
axios.get("/douyu/api/RoomApi/live?offset=0&limit=20").then(res=>{
  console.log(res)
})
</script>
<style scoped>

</style>