<template>
    <div>
       <h1>我是05课件的一个子组件</h1>
       <button @click="sendData">向父组件传递数据</button>
    </div>
  </template>
  
  <script lang="ts">
  import {defineComponent, ref} from 'vue';

  export default defineComponent({
    //   props 用来存放 父组件传递过来的属性  context 是一个对象可以用来发送自定义事件
      setup(props,context){
        let msg = ref("我是子组件中的数据")
        console.log(context)
        function sendData(){
            // 发送自定义事件 参数一自定义事件名称 参数二 将要传递的参数
            context.emit("sendmsg",msg.value)
        }
        return {
            sendData
        }
      },
  
  })
  </script>
  <style scoped>
  div{
    width: 100%;
    height: 300px;
    background: blue;
  }
  </style>