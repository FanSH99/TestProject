<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" :to="`/home?geohash=${geohash}`">
        <span>外卖</span>
        <template #icon="props">
          <img :src="props.active ? require('../../assets/tabar/ele-active.png') : require('../../assets/tabar/ele.png')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">
        <span>搜索</span>
        <template #icon="props">
          <img :src="props.active ? require('../../assets/tabar/search-active.png') : require('../../assets/tabar/search.png')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/order">
        <span>订单</span>
        <template #icon="props">
          <img :src="props.active ? require('../../assets/tabar/order-active.png') : require('../../assets/tabar/order.png')" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/mine">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? require('../../assets/tabar/user-active.png') : require('../../assets/tabar/user.png')" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active:0,
      geohash:null
    };
  },
  created(){
    this.geohash = localStorage.getItem("geohash")
  },
  watch:{
    '$route.path':{
      handler(newPath){
        if(newPath == '/home'){
          if(!this.$route.query.geohash){
            this.$router.push("/city")
          }
        this.active = 0
      }else if(newPath == '/search'){
        this.active = 1;
      }else if(newPath == '/order'){
        this.active = 2
      }else{
        this.active =3
      }
      },
      immediate:true
    }
  }
};
</script>
<style>
</style>