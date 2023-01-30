<template>
    <div class="one">
        <h2>评论人</h2>
        <div>
            <input type="text" v-model="name">
        </div>
        <h2>评论内容 </h2>
        <div>
            <textarea name="" id="" rows="6" v-model="content"></textarea>
        </div>
        <div>
            <button @click="send">发表</button>
        </div>
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue'
import bus from '@/utils/bus';
export default defineComponent({
    setup(props, context) {
        let name = ref("");
        let content = ref("");

        function send() {
            console.log(name, content, context);
            if (name.value == '' || content.value == "") {
                alert("请补充完整信息");
                return;
            } else {
                console.log(bus);
                bus.emit("sendmsg", { name: name.value, content: content.value });

            }
        }
        return {
            name,
            content,
            send
        }
    },
    data() {
        return {

        }
    },
})
</script>
<style>

</style>