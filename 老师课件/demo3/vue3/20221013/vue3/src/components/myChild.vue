<template>
    <div class="child">
       <h1>我是一个mychild组件 {{mynum}}</h1>
       <button @click="getNum">获取num</button>
       <h3>{{mymsg}}</h3>
    </div>
  </template>
  
  <script lang="ts">
  import {defineComponent} from 'vue';

  export default defineComponent({
    // 接受父组件传递的属性
     props:{
        mynum:Number,
        mymsg:String
     }, 
     // props 形参存放着父组件传递过来的所有属性 若想要在setup入口函数中使用父组件传递的值就需要水用props.属性名获取
      setup(props){
       let getNum = ()=>{
        // console.log(this)
        console.log(props.mynum)
        console.log(props)
       }
       return {
        getNum
       }
      },
  
  })
  </script>
  <style scoped>
  .child{
    width: 100%;
    height: 200px;
    background-color: red;
  }
  </style>