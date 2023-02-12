<template>
  <div class="home">
    <div class="cate" v-for="(item,index) in 6" :key="index">
      分类
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>
<style scoped>
  /* rem 单位是以html标签字体大小为计量单位  1rem登录html字体大小 默认16px */
/* .home{
  width: 1rem;
  height: 1rem;
  background: red;
} */
.home{
  width: 750px;
  margin:0 auto;
  height: 375px;
  background: red;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.cate{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: blue;
  margin-top: 10px;
  font-size: 13px;
  text-align: center;
  line-height: 150px;
}
</style>
