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
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
    
    setup(props, context) {

        let name = ref("");
        let content = ref("");
        let send = () => {
            if (name.value == '' || content.value == "") {
                alert("请补充完整信息");
                return;
            }
            let obj = {
                name: name.value,
                content: content.value,
            }
            context.emit("sendmsg", obj);
        }
       
        return {
            name,
            content,
            send,
        }
    },
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