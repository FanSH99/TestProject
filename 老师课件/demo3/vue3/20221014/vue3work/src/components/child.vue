<template>
  <div>
            <h2>评论人</h2>
            <div><input type="text" v-model="name"></div>
            <h2>评论内容</h2>
            <div><textarea cols="30" rows="10" v-model="content"></textarea></div>
            <div><button @click="send">发表</button></div>
        </div>
</template>

<script lang='ts'>
import { defineComponent, ref} from 'vue'
export default defineComponent({
  setup (props,context) {
    let name = ref("");
    let content = ref("");
    let send = ()=>{
        let obj = {
            name:name.value,
            content:content.value
        }
        // 向父组件发送自定义事件
        context.emit("sendobj",obj)
    }
    return {
        name,
        content,
        send
    }
  },
})

</script>
<style scoped lang='less'>
   input{
            width: 100%;
            height: 40px;
        }
        textarea{
            width: 100%;
        }
</style>