<template>
  <div>
        <h1>响应式api</h1>
        <!-- 组件模板会自动将响应式对象解构 -->
        <p>{{num}}</p>
        <button @click="add">++</button>
        <h1 v-if="isShow">{{str}}</h1>
  </div>
  <ul>
    <li v-for="(item,index) in list" :key="index">
    {{item}}
    </li>
  </ul>
</template>
<script lang="ts">
// 引入 ref相应式api
import {ref} from 'vue';
import {defineComponent} from 'vue';
export default defineComponent({
    setup(){
        // 定义响应式基本数据类型 value属性就是该响应式数据的值
        let num = ref(0);
        console.log(num.value)
        
        let str = ref("好好学习天天向上");
        let isShow = ref(true);
        let n = ref(null)
        let list = ref(["张三","李四","王五"])
        // ref不能定义响应式对象
        // let user = ref({
        //     name:"张三",
        //     age:18
        // })
        function add(){
            num.value ++
            isShow.value = !isShow.value
            // vue3可以监听数组的改变
            list.value[0] = '嘿嘿嘿'
            list.value.push("哈哈哈哈")
            // user.value.name = "王五"
        }
        return {
            num,
            add,
            str,
            isShow,
            list,
        }
    }
})
</script>
<style>
</style>