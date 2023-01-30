<template>
    <div class="child">
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
import { defineComponent, reactive, ref } from 'vue'
import child from '@/components/home/child.vue';
export default defineComponent({
    setup(props, context) {
        let name = ref("");
        let content = ref("");

        let isTrue = ref(false)


        function send() {
            if (name.value == '' && content.value == '') {
                alert("请补充完整信息");
                return
            }
            isTrue.value = true;

            let msg = {
                name: name.value,
                content: content.value,
            }
            context.emit("sendmsg", msg)
            // console.log(msg);
        }
        // console.log(msg);

        return {
            name,
            content,
            send,
            isTrue
        }
    },
    components: {
        child,
    }
})
</script>
<style>

</style>