<template>
  <div>
    <h1>我是one组件</h1>
    <h2>{{mymsg}}</h2>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import bus from '@/mitt'

export default defineComponent({
  setup() {
    let mymsg = ref("")
    //  订阅消息 参数一订阅的事件名称 参数二 回调函数
    bus.on("getmsg", (msg: any) => {
      mymsg.value = msg
    })

    return {
      mymsg
    }
  },

})
</script>
<style scoped>
div {
  width: 100%;
  height: 200px;
  background: red;
}
</style>