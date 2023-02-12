<template>
    <div>
       <h1>我是two组件</h1>
       <button @click="sendmsg">发布消息</button>
    </div>
  </template>
  
  <script lang="ts">
  import {defineComponent, ref} from 'vue';
  import bus from '@/bus'
  export default defineComponent({
      setup(){
        let msg = ref("今天休息，嘿嘿嘿")
        let sendmsg = ()=>{
        // 发布消息
        bus.emit(msg)
        }
        return {
            sendmsg
        }
      },
  
  })
  </script>
  <style scoped>
  div{
    width: 100%;
    height: 200px;
    background: blue;
  }
  </style>