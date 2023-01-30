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
    </div>

    <div v-if="isTrue">
        <child :mymsg="msg" />
    </div>
    <div v-else>
        <child></child>
    </div>



</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
import child from '@/components/home/child.vue';
import { stringLiteral } from '@babel/types';
export default defineComponent({
    setup(props, context) {
        let name = ref("");
        let content = ref("");

        // function send() {
        //     console.log(name, content, context);
        //     if (name.value == '' || content.value == "") {
        //         alert("请补充完整信息");
        //         return;
        //     } else {
        //         let msg = {
        //             name: '',
        //             content: "",
        //         }
        //         msg.name = name.value;
        //         msg.content = content.value;
        //         return msg;

        //     }
        //     // console.log(msg);
        // }
        let isTrue = ref(false)

        let msg = reactive({
            name: "",
            content: "",

        });
        function send() {
            if (name.value == '' && content.value == '') {
                alert("请补充完整信息");
                return
            }
            isTrue.value = true;
            msg.name = name.value;
            msg.content = content.value
            // console.log(msg);
        }
        // console.log(msg);

        return {
            name,
            content,
            send,
            msg,
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