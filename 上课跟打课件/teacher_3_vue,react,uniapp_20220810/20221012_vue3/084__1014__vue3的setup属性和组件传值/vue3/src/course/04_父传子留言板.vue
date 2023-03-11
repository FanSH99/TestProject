<template>
    <div class="parent">
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
        <child :msg="msg" />
    </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
import child from '@/components/lyb.vue'
export default defineComponent({
    // 2022年10月14日10:01:25
    setup() {
        let name = ref("");
        let content = ref("");
        let msg = reactive({
            name: "",
            content: "",
        })
        let send = () => {
            if (name.value == '' || content.value == "") {
                alert("请补充完整信息");
                return;
            }
            msg.name = name.value;
            msg.content = content.value;
        }
        return {
            name,
            content,
            send,
            msg
        }
    },
    components: {
        child,

    }
})
</script>
<style lang='less' scoped>
input {
    width: 100%;
    height: 20px;
}

textarea {
    width: 100%;
}
</style>