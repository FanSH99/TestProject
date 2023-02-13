<template>
    <div>
        <h1>父传子--{{num}}</h1>
        <my-child :mynum="num" :mymsg="msg"></my-child>
        <!-- 
            父传子两步
            1.在父组件的子组件标签上绑定一个自定义属性
            2.在子组件中用props接收。
         -->
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue'
import myChild from '@/components/mychild.vue'
export default defineComponent({
    setup() {
        let num = ref(0);
        let msg = ref("那年花开月正圆");
        return {
            num,
            msg,
        }
    },
    components: {
        myChild,
    },
    data() {
        return {

        }
    },
})
</script>
<style lang='less' scoped>

</style>