<template>
  <div id="app">
    {{num}}
    <router-link to="/">首页</router-link>
    <router-link to="/car">购物车</router-link>
    <router-link to="/mine">我的</router-link>
    <router-link to="/login">登录</router-link>
    <router-view></router-view>

  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {
     num:0
   }
  },
  components: {
    
  },
  // watch: {
  //   // 监听路由
  //   "$route.path": function (newVal, oldVal) {
  //     console.log("路由改变了",newVal,oldVal);
  //     switch (newVal) {
  //       case '/': this.num = 0; break;
  //       case '/car': this.num = 1; break;
  //       case '/home': this.num = 2; break;
  //       case '/login': this.num = 3; break;
  //     }
  //   }
  // }
}
</script>

<style>

</style>
