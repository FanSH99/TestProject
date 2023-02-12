<template>
  <div id="app">

    <router-view/>
    <van-tabbar v-model="active" active-color="red" inactive-color="#b4b4b4" placeholder @change="changeTab">
  <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="search" :dot="true">分类</van-tabbar-item>
  <van-tabbar-item icon="cart-o"  badge="5">购物车</van-tabbar-item>
  <van-tabbar-item icon="setting-o" to="/about">
    <span>我的</span>
    <template #icon="props">
       <img :src="props.active ? icon.active : icon.inactive" />
    </template>
  </van-tabbar-item>
</van-tabbar>

  </div>
</template>
<script>
export default {
   data(){
    return{
      active:0,
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
      },
    }
   },
   methods:{
    changeTab(active){
      console.log("我发生改变了",active)
    }
   }
}
</script>
<style lang="less">

</style>
