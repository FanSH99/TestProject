<template>
    <div>
        <h1>声明周期</h1>
        <p>{{num}}</p>
        <button @click="num++">num++</button>
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref, onBeforeMount, onBeforeUpdate, onMounted, onUpdated } from 'vue'
export default defineComponent({
    setup() {

        let num = ref(0)
        onBeforeMount(() => {
            console.log("组件渲染前");
        })
        onMounted(() => {
            console.log("组件渲染后");
        })
        onBeforeUpdate(() => {
            console.log("数据更新前");
        })
        onUpdated(() => {
            console.log("数据更新后");
        })
        return {
            num,
        }
    },
    data() {
        return {

        }
    },
})
</script>
<style>

</style>

<!-- 

    vue2中写生命周期,

    created(){}--创建后
    mounted(){}---渲染后
    …………
    
 -->