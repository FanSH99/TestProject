<template>
    <div>
        <h1>nextTik的使用</h1>
        <!-- ref 属性后面跟一个响应式数据 响应式数据的值就是当前这个dom对象 -->
        <p v-if="isShow" ref="refP">好好学习天天向上</p>
        <button @click="show">显示</button>
    </div>
</template>
  
<script lang="ts">
//   nextTick 组合API 
import { defineComponent, ref, nextTick } from 'vue';

export default defineComponent({
    setup() {
        let isShow = ref(false)
        let refP = ref(null);
        let show = async () => {
            // console.log(refP.value)
            isShow.value = true
            // nextTuck 等dom更新完成后在执行 下面代码
            await nextTick();
            console.log(refP.value)
        }
        return {
            isShow,
            show,
            refP
        }
    },

})

// 作业： 留言板案例 三种方式 ： 父传子，子传父 ，非父子
</script>
<style scoped>

</style>