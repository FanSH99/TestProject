<template>
    <div>
        <h1>我是two组件</h1>
        <button @click="sendMsg">发布消息</button>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import bus from '@/mitt'
export default defineComponent({
    setup() {
        let msg = ref("嘿嘿嘿")
        let sendMsg = () => {
            // 发送自定义事件 参数一自定义事件名称 参数二 你要传递的数据 参数可以是任意类型
            bus.emit('getmsg', "哈哈哈哈哈")
        }
        return {
            sendMsg
        }
    },

})
</script>
<style scoped>
div {
    width: 100%;
    height: 200px;
    background: blue;
}
</style>