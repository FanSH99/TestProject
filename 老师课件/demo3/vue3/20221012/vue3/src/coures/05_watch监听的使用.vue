<template>
  <div>
    <h1>{{num}}</h1>
    <button @click="num++">add</button>
    <h1>{{user.name}} --- {{user.age}}</h1>
    <button @click="changeUser">改变</button>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, ref,watchEffect} from 'vue';
// 引入监听api
import {watch} from 'vue'
export default defineComponent({
    setup(){
        let num  = ref(0);
        // 监听响应式普通数据类型的改变
        watch(num,(newVal,oldVal)=>{
            // newVal 参数为改变后的值 oldVal 参数为旧值
            console.log("num发生改变了",newVal,oldVal)
        })
        // watch参数一如果是一个函数的话 那么 必须要有一个返回值 返回值必须是一个普通数据类型
        //  watch(()=>num.value,(newVal,oldVal)=>{
        //     console.log("num发生改变了",newVal,oldVal)
        //  })
        let user = reactive({
            name:"张三",
            age:18
        })
        let changeUser = ()=>{
            user.name = '李四';
            // user.age = 20;

        }
        // 监听响应式对象 只有一个形参 形参为 改变后的新对象
        watch(user,(newVal)=>{
            console.log("对象发生改变了",newVal)
        })
        // 若想要监听对象中的某个属性变化 那么参数一必须为一个函数 返回值则是你要监听对象属性
        watch(()=>user.age,(newVal)=>{
            console.log("对象发生改变了",newVal)
        })
        
        //  初始化时会立即执行 当其依赖的数据发生改变时 会追踪该数据的改变 再次调用
        watchEffect(()=>{
            console.log("我被调用了")
                console.log(num.value)
        })
        return {
            num,
            user,
            changeUser
        }
    }
})
</script>
<style>
</style>