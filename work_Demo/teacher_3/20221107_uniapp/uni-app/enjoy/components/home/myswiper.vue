<template>
    <view class="myswiper">
       <u-swiper :list="bannerList.banner" keyName="pic"></u-swiper>
    </view>
</template>

<script>
    export default {
        // props: {
        //     bannerList: Array,
        // },
        props: ["bannerList"],
        data() {
            return {
               
            }
        },
        onLoad() {
            // console.log(this.bannerList);
        }
    }
</script>

<style scoped>
    .img {
        width: 100%;
    }

    .myswiper {
        width: 95%;
        margin: 20rpx auto;
    }

    swiper {
        height: 280rpx;
    }
</style>
