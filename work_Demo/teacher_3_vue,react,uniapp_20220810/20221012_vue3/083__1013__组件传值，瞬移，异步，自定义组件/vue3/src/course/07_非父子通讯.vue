<template>
    <div>
        <h1>使用mitt实现非父子组件通信</h1>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import bus from '@/bus'
console.log(bus);

import one from '@/components/06_child/one.vue'
import two from '@/components/06_child/two.vue'
export default defineComponent({
    setup() {
        //    2022年10月13日15:51:37

        // emit插件可以用来解决，vue3中非父子组件的通信。也用的发布订阅模式。
        // 安装eit
        //  使用功能mitt.on订阅 mitt.emit发布

    },
    data() {
        return {

        }
    },
})
</script>
<style lang='less' scoped>

</style>