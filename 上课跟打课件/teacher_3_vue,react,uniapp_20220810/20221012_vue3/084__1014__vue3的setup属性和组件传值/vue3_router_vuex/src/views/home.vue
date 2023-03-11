<template>
  <div>

    <h1>首页{{store.state.num}}</h1>
    <button @click="add">++</button>
    <p>价格：{{store.getters.getSum}}</p>
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { useStore } from 'vuex'
let store = useStore();
console.log(store);

let add = () => {
  store.commit("add", 5)
}

</script>
<style lang='less' scoped>

</style>