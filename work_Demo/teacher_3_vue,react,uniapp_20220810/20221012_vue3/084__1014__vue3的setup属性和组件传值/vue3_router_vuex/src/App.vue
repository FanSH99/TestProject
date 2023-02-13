<template>
  <nav>
    <router-Link to="/">首页</router-Link> |
    <RouterLink to="/mine"> 我的</RouterLink> |
    <button @click="goCart">购物车</button> |
    <button @click="goAbout">关于（params)</button>
    <button @click="goInfo">详情</button>
  </nav>
  <router-view />
</template>
<script lang="ts" setup>

// useRouter用来获取路由实例。
import { watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

let router = useRouter();
console.log(router);

// vue3可以重复跳转路由，vue2重复跳转会报错。
function goCart() {
  router.push({
    path: "/cart",
    query: {
      name: "手机",
      price: 1999,
    }
  })
}

function goAbout() {
  router.push({
    name: "about",
    params: {
      name: "西西",
      age: 18
    }
  })
}

function goInfo() {
  router.push({
    path: "/info/" + 100
  })
}

// 获取路由对象。
let route = useRoute();

// 监听路由变化。
watch(() => route.path, (path) => {
  console.log(path, "我发生改变了");

})
</script>

<style lang="less">

</style>
