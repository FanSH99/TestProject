
<template>
    <div>
       <h1>子组件向父组件传值</h1>
       {{msg}}
       <my-child @sendmsg="getMsg"></my-child>
    </div>
  </template>
  
  <script lang="ts">
  import {defineComponent, ref} from 'vue';
  import myChild from '@/components/05_child.vue'
  export default defineComponent({
      setup(){
        let msg = ref("")
        function getMsg(a:string){
            console.log(a)
            msg.value = a
        }
        return {
            getMsg,
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