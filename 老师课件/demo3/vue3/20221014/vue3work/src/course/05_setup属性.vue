<template>
  <div>
    <h1 ref="numRef" v-color-directive="'red'">{{num}}</h1>
    <button @click="add">++</button>
    <one></one>
    <div>
        {{getSum}}
    </div>
  </div>
</template>
<!-- setup 属性是 setup函数的语法当 当给script 标签添加上setup 属性时 模版使用响应式数据时无需在return -->
<script lang='ts' setup>
// 在setup 属性中 无需注册组件只需要引入使用就可以
import one from '@/components/one.vue'
import {ref,computed, watch,onMounted} from 'vue';
let num = ref(0)
function add(){
    num.value ++
}
// 计算属性
let getSum = computed(()=>{
    return num.value * 10
})
watch(num,()=>{
    console.log("监听到啦")
})
let numRef = ref(null)
onMounted(() => {
    console.log("渲染后") 
    console.log(numRef.value) 
})
// 定义一个自定义指令 v指令名称Directive v-名称-directive
let vColorDirective = {
    mounted(el:any,data:any) {
        el.style.color=data.value
    },
}

</script>
<style scoped lang='less'>
</style>