<template>
  <div>
    <div v-if="isShow">
      <async-component></async-component>
    </div>
    <button @click="show" v-color="'blue'">显示</button>
    <mybtn type="success">成功</mybtn>
    <h1>{{num}}</h1>
    <button @click="num++">++</button>
  </div>
</template>
<script>
// import asyncComponent from '@/components/asyncComponent.vue';
// 异步组件：就是只有在使用的时候才会加载
// 创建异步组件 
let asyncComponent = ()=>import("@/components/asyncComponent.vue");
import showMixins from "@/mixins/showMixins";
export default {
  data(){
    return {
   
    }
  },
  // 注册混入  之后混入对象中的data数据以及methods方法等等都会自动挂在到当前组件实例
  mixins:[showMixins],
  // 注册组件
  components:{
    asyncComponent
  },
  methods:{
    click(){
      console.log(this)
    }
  }
}
</script>
<style>
</style>