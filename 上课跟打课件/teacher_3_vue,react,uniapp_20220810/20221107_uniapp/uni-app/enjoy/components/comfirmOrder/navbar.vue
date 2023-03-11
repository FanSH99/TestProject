<template>
    <view class="navbar">
       <view class="left">
           <u-icon name="home" size="20" color="#fff"></u-icon>
       </view>
       <view class="center">
           提交订单
       </view>
       <view class="right">
           <u-icon name="more-dot-fill" size="20" color="#fff"></u-icon>
       </view>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        }
    }
</script>

<style scoped>
    .navbar{
        display: flex;
        justify-content: space-between;
        background-color: #ff6034;
        color:#fff;
        height:100rpx;
        line-height:100rpx;
        padding:0 32rpx;
    }
    .navbar .u-icon{
        /* text-align: center; */
       margin:25rpx 0;
    }
</style>