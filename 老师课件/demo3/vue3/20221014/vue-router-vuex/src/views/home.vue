<template>
  <div>
    <h1>首页 {{store.state.num}}</h1>
    <button @click="add">++</button>
    <h2>价格：{{store.getters.getSum}}</h2>
     <!-- 显示首页下的二级路由 -->
    <router-view></router-view>
  </div>
</template>
<script lang='ts' setup>
import {useStore} from 'vuex';
// 获取vuex仓库实例
let store = useStore();
console.log(store)
let add = ()=>{
    store.commit("add",5)
}
</script>
<style scoped lang='less'>
</style>