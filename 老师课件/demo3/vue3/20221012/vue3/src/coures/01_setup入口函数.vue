<template>
  <div>
    {{sum}}
  </div>
  <ul>
    <li v-for="(item,index) in arry" :key="index">{{item}}</li>
  </ul>
  <button @click="add">++</button>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
    // setup为 vue3组件入口函数，通常我们会将组件中的业务逻辑编写到setup入口函数中
    // 顶层 async函数
    // 可以将setup入口函数看作是 vue2的befroCreatd created
    // setup入口函数可以有一个返回值,返回值是一个对象 ，可以将返回值暴露给组件模板和组件实例
    setup(){
        // 普通变量只是一个普通数据 不是相应式的所以你改变sum视图不会更新
        let sum:number = 0;
        for(let i=0;i<100;i++){
            sum+=i
        }
        console.log(sum)
        let arry:Array<number> = [1,2,3,4,5,6]
        let add = ()=>{
            console.log("点我了")
            sum++  //视图不会更新
            console.log(sum)
        }
        return {
            sum,
            arry:arry,
            add
        }
    }
})
</script>
<style>
</style>