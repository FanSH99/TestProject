<template>
    <div class="parent">
        <div>
            <h2>评论人</h2>
            <div><input type="text" v-model="name"></div>
            <h2>评论内容</h2>
            <div><textarea cols="30" rows="10" v-model="content"></textarea></div>
            <div><button @click="send">发表</button></div>
        </div>
        <lyb :msg="msg"></lyb>
    </div>
</template>

<script lang='ts'>
import lyb from '@/components/lyb.vue'
import { defineComponent,reactive,ref} from 'vue'
export default defineComponent({
  setup () {
    let name = ref("");
    let content = ref("");
    let msg = reactive({
        name:"",
        content:""
    })
    let send = ()=>{
         msg.name = name.value;
         msg.content = content.value
    }
    return {
        name,
        content,
        send,
        msg
    }
  },
  components:{
    lyb
  }
})

</script>
<style scoped lang='less'>
</style>