<template>
    <div>
       <h1 v-color='"blue"' v-fontsize="'100px'">自定义指令</h1>
    </div>
  </template>
  
  <script lang="ts">
  import {defineComponent} from 'vue';

  export default defineComponent({
      setup(){
       
      },
      directives:{
        "color":{
            mounted(el,data) {
                // el 表示当前指令作用的dom对象
                // data 表示 自定义指令内容 data.value 自定义指令值
            el.style.color = data.value 
            },
        }
      }
  })
  </script>
  <style scoped>
  </style>