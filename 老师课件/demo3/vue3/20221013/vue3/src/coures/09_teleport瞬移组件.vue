<template>
    <div>
        <!-- teleport 组件就是将结构渲染到指定dom中   -->
          <teleport to='#tankuang'>
            <div class="msk" v-show="isShow" @click="isShow=false">
               <div class="btn"></div>
         </div>
            </teleport> 
         <button @click="isShow = true">显示</button>
    </div>
  </template>
  
  <script lang="ts">
  import {defineComponent, ref} from 'vue';

  export default defineComponent({
      setup(){
        let isShow = ref(false)
        return {
            isShow
        }
      },
  
  })
  </script>
  <style>
  .msk{
    width: 100%;
    height: 100vh;
    background-color: rgba(11, 11, 11, 0.4);
    position: absolute;
    top: 0;
  }
  .btn{
    width: 200px;
    height: 100px;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -50px;
    margin-left: -100px;
  }
  body{
    margin: 0;
  }
  </style>