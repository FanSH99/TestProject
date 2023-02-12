<template>
  <div class="info">
  <myheader  :info="info"></myheader>
  <van-tabs v-model="active" color="#3190e8" animated swipeable>
  <van-tab title="商品">
    <foodsList :restaurant_id="id" @over="over"></foodsList>
  </van-tab>
  <van-tab title="评价">
    <pingjia></pingjia>
  </van-tab>
  </van-tabs>
  <div class="loading" v-if="!(info && isLoading)">
    <img src="../../assets/info.svg" alt="">
  </div>
  <cart :tip="tip" :float_minimum_order_amount="float_minimum_order_amount" v-show="active==0"></cart>
  </div>
</template>
<script>
import myheader from './components/header.vue';
import { getShopInfo } from '@/api/shop';
let foodsList = ()=>import("./components/foodsList.vue")
let cart = ()=>import("./components/cart.vue")
let pingjia = ()=>import("./components/pingjia.vue")
export default {
  data(){
    return {
       id:0,
       info:null,
       active:0,
       isLoading:false,
       tip:null,
      //  起送价
       float_minimum_order_amount:0
    }
  },
  components:{
    myheader,
    foodsList,
    cart,
    pingjia
  },
 async created(){
    // 获取当前店铺id
    this.id = this.$route.params.id;
    this.$store.commit("setId",this.id)
    // 获取店铺详情
    let res = await getShopInfo(this.id);
    this.info = res.data; 
    this.tip = res.data.piecewise_agent_fee.tips
    this.float_minimum_order_amount = res.data.float_minimum_order_amount;
  },
  methods:{
    over(){
      this.isLoading = true
    }
  }
}
</script>
<style lang="less" scoped>
    .info{
        width: 100%;
        min-height: 100vh;
        // background: #f1f1f1;
  
    }
    .loading{
      width: 100%;
      height: 100vh;
      background: #f1f1f1;
      position: absolute;
      top: 0;
      z-index: 999;
      img{
        width: 100%;
      }
    }
</style>