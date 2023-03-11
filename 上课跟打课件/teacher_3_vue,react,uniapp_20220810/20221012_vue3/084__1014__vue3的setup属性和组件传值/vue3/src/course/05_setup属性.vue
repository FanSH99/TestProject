<template>
    <div>
        <h1 ref="numRef" v-color-directive="'red'">setup属性</h1>
        <p>{{num}}---{{getSum}}</p>
        <button @click="add">++</button>
        <one />

    </div>
</template>
<!-- script setup 可以与script混合使用，但是一般不这样用。 -->
<script lang='ts' setup>
import { defineComponent, ref, computed, watch, onMounted } from 'vue'
// 在setup中不需要注册组件，只需要引入即可显示组件。
import one from '@/components/one.vue'
// 2022年10月14日10:17:18
// 当使用serup属性后，即给script标签添加上setup,定义响应式数据不需要return
let num = ref(0);
let add = () => {
    num.value++
}
let getSum = computed(() => {
    return num.value * 10
})

watch(num, () => {
    console.log("num发生改变了");

})

onMounted(() => {
    console.log("组件渲染之后");
    console.log(numRef.value);
})

let numRef = ref(null);

// 定义一个自定义指定v指令名称Directive 使用的时候v-名称-directive
let vColorDirective = {
    mounted(el: any, data: any) {
        el.style.color = data.value
    }
}
</script>
<style lang='less' scoped>

</style>

