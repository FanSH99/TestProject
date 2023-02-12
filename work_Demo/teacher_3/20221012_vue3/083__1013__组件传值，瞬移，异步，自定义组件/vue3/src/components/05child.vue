<template>
    <div>
        <h1>我是05课件的一个子组件</h1>
        <button @click="sendData">向父组件传递数据</button>
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup(props, context) {
        // props用来存放父组件传递过来的数据，context是一个对象可以用来发送自定义事件。
        let msg = ref("一条数据");
        function sendData() {
            console.log(props, context);
            // context---attrs,emit,expost,slots
            // 发送自定义事件，参数1自定义名称，菜单树2传递的数据。
            context.emit("sendmsg", msg)

        }
        return {
            sendData,
            msg
        }
    },
    data() {
        return {

        }
    },
})
</script>
<style>
div {
    width: 100%;
    height: 300px;
    background: #ff8000;
}
</style>