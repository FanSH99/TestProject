<template>
  <div class="home">
    <p>轮播图</p>
   <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
   
  }
}
</script>
<style>
  *{
    margin: 0;
  }
  .home{
    /* 1屏幕宽 */
    width:375px;
    height: auto;
    background: #f1f1f1;
  }
    .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  p{
    padding:40px 0
    }
</style>
