<template>
    <div>
       <h1>我是one组件</h1>
       <h4>{{mymsg}}</h4>
    </div>
  </template>
  
  <script lang="ts">
  import {defineComponent, ref} from 'vue';
  import bus from '@/bus'
  export default defineComponent({
      setup(){
        let mymsg =ref("")
        // 订阅消息
        bus.on((msg)=>{
            console.log(msg)
            mymsg.value = msg.value
        })
        return {
            mymsg
        }
      },
  
  })
  </script>
  <style scoped>
  div{
    width: 100%;
    height: 200px;
    background: red;
  }
  </style>