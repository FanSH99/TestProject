<template>
  <div id="app">
      <router-link to="/">首页</router-link>
      |
      <router-link to="/cart">购物车</router-link>
      |
      <router-link to="/mine/lzq">我的 {{$route.path}}</router-link>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      num:0
    }
  },
  watch:{
    num(){

    },
    // 监听路由路径变化
    "$route.path":function(newVal,oldVal){
      console.log("路由改变了",newVal,oldVal)
      /* 
      作业:使用监听路由实现 lol案例浏览器前进后退 active动态切换
      */
      // if(newVal=='/'){
      //   this.num=0
      // }else if(newVal=='/cart'){

      // }
    }
  }
}
</script>

<style>

</style>
