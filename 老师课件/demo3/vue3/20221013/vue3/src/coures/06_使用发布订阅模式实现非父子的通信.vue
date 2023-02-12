<template>
    <div>
        <one></one>
        <Two></Two>
    </div>
  </template>
  
  <script lang="ts">
  import {defineComponent} from 'vue';
  import one from '@/components/06_非父子/one.vue'
  import Two from '@/components/06_非父子/two.vue'
  export default defineComponent({
      setup(){
     
      },
      components:{
        one,
        Two
      }
  })
  </script>
  <style scoped>
  </style>