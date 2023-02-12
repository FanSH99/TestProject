<template>
    <div>
        <h1>使用mitt实现非父子通信</h1>
        <one></one>
        <two></two>
    </div>
  </template>
  
  <script lang="ts">
  import one from '@/components/07_mitt通信/one.vue'
  import two from '@/components/07_mitt通信/two.vue'
  import {defineComponent} from 'vue';
  export default defineComponent({
      setup(){
     
      },
      components:{
        one,
        two
      }
  })
  </script>
  <style scoped>
  </style>