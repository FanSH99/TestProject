<template>
    <view :class="{navbar:true,show:isNav}" >
        <view class="left">
            <u-icon name="arrow-left" size="20" style="padding: 10rpx;"></u-icon>
        </view>
        <view class="search">
            <input type="text" placeholder="搜索商品">
        </view>
    </view>
</template>

<script>
    export default {
        props:["isNav"],
        data() {
            return {
              
            }
        },
        methods: {
            
        },
        
    }
</script>

<style scoped>
.navbar{
    width:100%;
    position: fixed;
    display: flex;
    z-index: 999;
    top:0;
    left:0;
    padding:20rpx;
    
}
.show{
    background-color: #fff;
}
.left{
    width:70rpx;
    height:70rpx;
    border-radius: 50%;
    background-color: hsla(0,0%,100%,.3);
    text-align: center;
    line-height: 70rpx;
   
    border:1px solid #f1f1f1;
    
}
.search{
    width: 500rpx;
    height: 70rpx;
    text-align: center;
  
    margin-left: 55rpx;
    background-color: hsla(0,0%,100%,.3);
    border-radius: 35rpx;
    font-size: 28rpx;
    border:1px solid rgba(0,0,0,.07);
   
}
input{
     height: 70rpx;
      line-height: 70rpx;
}
</style>
