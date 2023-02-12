<template>
  <div>
    <h1>{{user.name}}----{{user.age}}---- {{user.sex}}</h1>
    <button @click="changeName">改变名称</button>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
// 引入响应式对象api
import {reactive,readonly} from "vue";
export default defineComponent({
    setup(){
        // 定义一个响应式对象
        let user = reactive({
            name:"张三",
            age:18,
            sex:"男"
        })
        console.log(user)
        function changeName():void{
            user.name = "李四"
            user.age = 20;
            user.sex = "女"
            // 坚决不能这样写
            // user = reactive({
            //     name:"李四",
            //     age:18,
            //     sex:"女"
            // })
        }
        let people = reactive({
            name:"张三",
            age:18
        })
        console.log(people)
        // 将响应式对象转化为 只读类型的响应式对象
        let newpeople = readonly(people);
        console.log(newpeople)
        console.log(newpeople.name)
        // newpeople.age = "李四"
        return {
            user,
            changeName
        }
    }
})
</script>
<style>
</style>