<template>
    <div class="shops" @click="goInfo">
      <div class="shop_img">
        <img v-lazy='`https://elm.cangdu.org/img/${shopInfo.image_path}`' alt="" />
      </div>
      <div class="shop_info">
        <div style="display: flex; position: relative;">
          <van-tag color="#3190e8">品牌</van-tag> 
          <span class="ys">{{shopInfo.name}}</span>
          <ul class="ul">
            <li v-for="(item,index) in shopInfo.supports" :key="index">{{item.icon_name}}</li>
          </ul>
        </div>
        <div class="shop_rot">
          <van-rate
            :size="8"
            v-model="shopInfo.rating"
            color="#ffd21e"
            void-icon="star"
            void-color="#eee"
          />
          <span class="rate">{{shopInfo.rating}}</span>
          <span class="sale">月销{{shopInfo.recent_order_num}}单</span>
          <span class="tag">
              <van-tag type="primary" v-if="shopInfo.delivery_mode">{{shopInfo.delivery_mode.text}}</van-tag>
              
              <span v-for="(item,index) in shopInfo.supports" :key="index">
                <van-tag plain type="primary" class="s" v-if="item.icon_name=='准'">准时达</van-tag>
              </span>
          </span>
        </div>
        <div class="shop_song">
            <span>
                ￥{{shopInfo.float_minimum_order_amount}}起送 / 配送费约¥{{shopInfo.float_delivery_fee}} 
            </span>
            <span>
                <span class="gl">{{shopInfo.distance}} /</span> <span class="time">{{shopInfo.order_lead_time}}</span>
            </span>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
     props:{
        shopInfo:Object
     },
      data(){
          return{
            value:8
          }
      },
      methods:{
        goInfo(){
          this.$router.push({
            path:"/shop/info/"+this.shopInfo.id
          })
        }
      }
  };
  </script>
  <style lang="less" scoped>
  .shops {
    padding: 15px 10px;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    justify-content: space-between;
    .shop_img {
      width: 18%;
      img {
        width: 100%;
      }
    }
    .shop_info {
      width: 79%;
      font-size: 13px;
    
      .ys {
        font-weight: bold;
        margin-left: 5px;
        font-size: 15px;
        width: 60%; 
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .ul {
        display: flex;
        position: absolute;
        right: 0;
        color: #b4b4b4;
        li {
          font-size: 10px;
          transform: scale(0.8);
          border: 1px solid #f1f1f1;
        }
      }
    }
    .rate{
        color:#ff6000;
        font-size: 10px;
        margin-left: 10px;
    }
    .sale{
        display: inline-block;
        font-size: 10px;
        color:#666;
        transform: scale(0.8);
    }
    .tag{
       
        position: absolute;
        right: 0;
        .s{
            margin-left: 2px;
        }
    }
    .shop_rot{
        position: relative;
        margin-top: 15px;
    }
  }
  .shop_song{
      display: flex;
            margin-top: 15px;
      justify-content: space-between;
      font-size: 13px;
      color: #666;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      .gl{
          color: #b4b4b4;
      }
      .time{
          color: #3190e8;
      }
  }
  </style>