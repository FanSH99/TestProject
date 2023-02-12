<template>
    <div>
        <h1>我的 {{store.num}}</h1>
        <h1>getters传参{{store.getname("我叫")}}</h1>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { useStore } from '../store/home'
let store = useStore();
console.log(store);
</script>
<style>

</style>