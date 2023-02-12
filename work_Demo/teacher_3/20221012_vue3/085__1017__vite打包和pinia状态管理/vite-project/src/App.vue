<template>
  <div>
    <h1>首页</h1>
    <p>hello vite {{num}}</p>
    <button @click="add">num++</button>
    <child />
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
// 默认不能用@代替src,需要配置别名。
import child from "@/components/child.vue"
import axios from 'axios';
let num = ref(0);
let add = () => {
  num.value++
}

axios.get("douyu/api/RoomApi/live?offset=20&limit=20").then(res => {
  console.log(res);
})

</script>
<style lang='less' scoped>

</style>