<template>
    <div>
        <h1>首页{{store.num}} {{store.name}}</h1>
        <button @click="add">num++</button>
        <button @click="changeName">name</button>
        <h1>getters:{{store.getSum}}</h1>
        <button @click="addCart">
            调用action
        </button>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { useStore } from '../store/home'
let store = useStore();
console.log(store);
let add = () => {
    store.num++
}

let changeName = () => {

    // 同过调用store中的$patch方法更改状态 
    // store.$patch({
    //     name:"李四",
    //     num:100
    // })
    // 参数可以是一个回调函数
    store.$patch((state) => {
        state.num += 10;
        state.name = "李四"
    })
}

let addCart = () => {
    store.add(5);
}

</script>
<style>

</style>