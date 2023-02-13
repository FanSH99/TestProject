<template>
    <view>
        <navbar></navbar>
        <view class="address">
            <view class="content">
                <text class="title">
                    收货地址
                </text>
                <view class="bottom">
                    <text>[默认]</text>
                    <u-icon name="arrow-right"></u-icon>
                </view>
            </view>
        </view>
        <view class="orderInfo">
            
        </view>
    </view>
</template>

<script>
    import navbar from '../../components/comfirmOrder/navbar.vue'
    import{comfirmOrder} from '../../api/info.js';
    export default {
        data() {
            return {

            }
        },
        components: {
            navbar
        },
        methods: {

        },
        async onLoad(options){
            console.log(options.id);
            let res=await comfirmOrder(options.id);
            console.log(res);
        }
    }
</script>

<style scoped>
    .address {
        width: 100%;
        background: linear-gradient(180deg, #ff6034, #fd9494);
        padding: 0 40rpx;
    }

    .content {
        background-color: #fff;
        padding: 20rpx;
        /* border-radius: 10rpx; */
        border-top-right-radius: 10rpx;
        border-top-left-radius: 10rpx;
        font-size: 24rpx;
        position: relative;
    }

    .content::after {
        content: "";
        width: 100%;
        height: 1px;
        background-image: url(https://java.crmeb.net/static/images/line.jpg);
        background-size: cover;
        position: absolute;
        bottom: 0;
    }
    .title {
        padding: 4rpx 8rpx;
        background-color: #1989fa;
        color: #fff;
        border-radius: 5rpx;
        font-weight: 500;

    }

    .bottom {
        display: flex;
        justify-content: space-between;
        padding-top: 20rpx;
        

    }



    .bottom text {
        font-size: 24rpx !important;
        color: #ff6034;
    }
</style>
