<template>
  <div>
    <h1>首页   {{store.num}}  {{store.name}}</h1>
    <button @click="add">++</button>
    <button @click="changeName">name</button>
    <!-- 调用计算属性 -->
    <h1>getters:{{store.getSum}}</h1>

    <button @click="addCart">
        调用action
    </button>
  </div>
</template>
<script lang='ts' setup>
import {useStroe} from '../store/home'
// import {usecartStore} from '../store/cart'
// 获取home仓库实例
let store = useStroe();
console.log(store)
let add = ()=>{
    // 更改state状态
    store.num ++
}
let changeName = ()=>{
    // 同过调用store中的$patch方法更改状态 
    // store.$patch({
    //     name:"李四",
    //     num:100
    // })
    // 参数可以是一个回调函数
    store.$patch((state)=>{
        state.num+=10;
        state.name = "李四"
    })
}
// 调用store中的计算属性



let addCart = ()=>{
    store.add(5);
}
</script>
<style scoped lang='less'>
</style>