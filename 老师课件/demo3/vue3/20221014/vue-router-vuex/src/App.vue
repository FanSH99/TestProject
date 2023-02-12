<template>
   <nav>
    <router-link to="/">首页</router-link> ｜
    <router-link to="/mine">我的</router-link> | 
    <button @click="goCart">购物车</button>
    <button @click="goAbout">关于(params)</button>
   </nav>
  <router-view></router-view>
</template>
<script lang="ts" setup>
// userRouter 用来获取路由实例
import { ref, watch } from 'vue';
import {useRouter,useRoute} from 'vue-router';
// 获取路由实例
let router = useRouter();
// 获取路由对象
let route = useRoute();
console.log(router)
function goCart(){
  // 跳转路由
    router.push({
      path:"/cart",
      // query 传递参数
      query:{
        name:"手机",
        price:1999
      }
    })
}
let id = ref(10)
function goAbout(){
  router.push({
    path:"/about/"+id.value,
  })
}
watch(()=>route.path,(path)=>{
  console.log("我发生改变",path)
})
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
