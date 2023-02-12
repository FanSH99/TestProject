<template>
  <div class="header" v-if="info">
       <div class="content">
          <div>
            <img v-lazy="`https://elm.cangdu.org/img/${info.image_path}`" alt="">
          </div>
          <div class="content_msg">
            <div class="shopName">{{info.name}}</div>
            <div class="shop_title">商家配送／分钟送达／配送费¥{{info.float_delivery_fee}}</div>
            <div class="shop_msg">公告： {{info.promotion_info}} </div>
          </div>
          <van-icon name="arrow" class="right"/>
          <van-icon name="arrow-left" class="left" @click="$router.go(-1)"/>
       </div>
       <div class="tip" v-if="info.activities.length!=0">
        <div>
            <van-tag :color="'#'+info.activities[0].icon_color">{{info.activities[0].icon_name}}</van-tag> {{info.activities[0].description}}
        </div>
        <div>
           {{info.activities.length}} 个活动      <van-icon name="arrow"/>
        </div>
       </div>
       <div class="bg_img">
         <img :src="`https://elm.cangdu.org/img/${info.image_path}`" alt="">
         <div class="msk"></div>
       </div>
  </div>
</template>
<script>
export default {
  props:["info"],
  data(){
    return {
       
    }
  }
}
</script>
<style lang="less" scoped>
.header{
    width: 100%;
    padding: 10px;
    position: relative;
    .content{
        display: flex;
        position: relative;
        .right{
            position: absolute;
            right: 0px;
            top: 50%;
            color: #FFF;
        }
        .left{
            position: absolute;
            top: -5px;
            left: -5px;
            color: #fff;
            z-index: 999;
        }
        img{
            width: 70px;
        }
        .content_msg{
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .shopName{
                font-size: 17px;
                font-weight: bolder;
                color: #FFF;
            }
            .shop_title{
                font-size: 13px;
                color: #FFF;
            }
            .shop_msg{
                width: 90%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: 13px;
                color: #fff;
            }
        }
    }
    .tip{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        color: #fff;
        margin-top: 5px;
    }
}
.bg_img{
    width: 100%;
    height: 120px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    img{
        width: 100%;
        filter: blur(5px);
    }
    .msk{
        width: 100%;
        height: 120px;
        position: absolute;
        top: 0;
        background: rgba(0, 0, 0,0.4);
    }
}
</style>