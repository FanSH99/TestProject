<template>
  <div></div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>
<style>
</style>
<!-- 

    路由跳转
    this.$router.push({
        path:"",
        query:{ },
        //params:{ }
    })

    获取路由传参
    this.$route.query.属性名
    this.$route.params.属性名

    动态路由path:"/name/:id" 获取动态属性this.$route.params.id

    路由嵌套 children[{}] router-view

    路由守卫


 -->