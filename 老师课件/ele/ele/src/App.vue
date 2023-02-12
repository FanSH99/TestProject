<template>
  <div id="app">
    <transition name="slider">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  created(){
   
  }
}
</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .page{
    width: 100%;
    min-height: 100vh;
    background: #f1f1f1;
    padding-top: 45px; 
  }
  .slider-enter,.slider-leave-to{
    opacity: 0;
  }
  .slider-enter-active,.slider-leave-active{
    transition: 0.5s;
    width: 100%;
    position: fixed;
    top: 0;
  }
  .mymenu .van-dropdown-menu__title--active{
    color: #3190e8 !important;
}
.van-tab--active{
  color: #3190e8 !important;
}
</style>
