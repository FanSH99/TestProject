<template>
    <view class="goods" @click="goInfo(item.id)">
        <image :src="item.image"></image>
        <view class="content">
            <view class="goodsname">
                {{item.storeNAme}}
            </view>
            <view class="otprice">
                {{item.otPrice}}
            </view>
            <view class="price">
                {{item.price}}
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        props: {
            item: Object,
        },
        methods:{
            goInfo(id){
                // console.log(id);
                uni.navigateTo({
                    url: '/pages/info/info?id='+id,
                    success: res => {},
                    fail: () => {},
                    complete: () => {}
                });
            }
        }
    }
</script>

<style scoped>
    .goods {
        width: 48%;
        background-color: #fff;
        margin-bottom: 20rpx;
        overflow: hidden;
        box-sizing: border-box;
    }

    .content {
        padding: 15rpx;
        box-sizing: border-box;

    }

    image {
        width: 100%;
    }

    .goodsname {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 26rpx;
        font-weight: 700;
    }

    .otprice {
        font-size: 25rpx;
        color: #919191;
        text-decoration: line-through;
        margin: 15rpx 0;
    }

    .price {
        font-size: 32rpx;
        font-weight: 700;
        color: red;
    }
</style>
