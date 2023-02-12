<template>
    <div>
       <h1>自定义组件</h1>
       <my-child></my-child>
       <one-child></one-child>
    </div>
  </template>
  
  <script lang="ts">
  import {defineComponent} from 'vue';
  import myChild from '@/components/child.vue'
import OneChild from '../components/oneChild.vue'
  export default defineComponent({
      setup(){
     
      },
    //   局部组册组件
      components:{
    myChild,
    OneChild
}
  })
  </script>
  <style scoped>
  </style>