<template>
    <div>
       <h1>异步组件</h1>
       <async-component v-if="isShow"></async-component>
       <button @click="isShow = true">显示</button>
    </div>
  </template>
  
  <script lang="ts">
  // defineAsyncComponent 用来创建一个异步组件
  import {defineComponent,defineAsyncComponent, ref} from 'vue';
//   let asyncComponent = ()=>import("@/components/ayncComponent.vue")
//  创建一个异步组件 只有使用的时候才会加载
  let asyncComponent = defineAsyncComponent(()=>import('@/components/ayncComponent.vue'))
  export default defineComponent({
      setup(){
        let isShow = ref(false);
        return {
            isShow
        }
      },
      components:{
        asyncComponent
      }
  })
  </script>
  <style scoped>
  </style>