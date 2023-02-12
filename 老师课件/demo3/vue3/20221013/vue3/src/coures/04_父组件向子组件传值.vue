<template>
    <div>
       <h1>父传子</h1>
       <!-- 
        1. 在父组件的子组件标签上绑定一个自定义属性
        2. 在子组件中使用props接受
        -->
       <my-child :mynum="num" :mymsg="msg"></my-child>
    </div>
  </template>
  
  <script lang="ts">
  import {defineComponent, ref} from 'vue';
  import myChild from '@/components/myChild.vue'
  export default defineComponent({
      setup(){
        let num = ref(100);
        let msg = ref("好好学习，天天向上")
        return {
          num,
          msg
        }
      },
      components:{
        myChild
      }
  })
  </script>
  <style scoped>
  </style>