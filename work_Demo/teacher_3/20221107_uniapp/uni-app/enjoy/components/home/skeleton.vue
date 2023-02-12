<template>
    <sk-container>
        <view class="search" style="padding:30rpx;">
            <input type="text" name="" id="">
        </view>
        <view style="padding: 0 30rpx 30rpx 30rpx;">
            <sk-swiper></sk-swiper>
            <sk-menu cols="5"></sk-menu>
            <sk-waterfall></sk-waterfall>
        </view>
    </sk-container>

</template>

<script>
    export default {

    }
</script>

<style scoped>
    page{
        background-color: #f1f1f1;
    }
    input{
        background-color: #e0e0e0;
        border-radius: 10rpx;
        padding:10rpx 0;
    }
</style>
