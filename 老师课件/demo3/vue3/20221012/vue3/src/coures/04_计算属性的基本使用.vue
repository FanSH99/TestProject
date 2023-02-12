<template>
  <div>
    <input type="text" v-model="price" placeholder="请输入商品价格"> * <input type="text" v-model="num" placeholder="请输入商品数量">  = 商品总价:{{getSum}}
  </div>
</template>
<script lang="ts">
import {defineComponent,ref} from 'vue';
// 引入计算属性组合api
import {computed} from 'vue'
export default defineComponent({
    setup(){
        /*  
         计算属性的特性:
         1. 必须要有一个return值.
         2. 当其依赖的属性发生改变时会自动调用
         3. 使用方法和响应式数据的使用方法一样.
        */
        // 商品单价
        let price = ref(0);
        // 商品数量
        let num = ref(0);
        // 定义一个计算属性 参数是一个回调函数
        let getSum = computed(()=>{
            console.log("我是计算属性")
            return price.value * num.value
        })
        return {
            price,
            num,
            getSum
        }
    }
})
</script>
<style>
</style>