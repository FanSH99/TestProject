<template>
    <view class="content">
        <!-- 注意h1这里不加粗，不能识别， -->
        <h1>初识uniapp</h1>
        <!-- 这里img标签虽然管用，可以展示出来，但是，被当做一个组件。 -->
        <img class="logo" src="/static/logo.png" alt="">
        <image class="logo" src="/static/logo.png"></image>
        <view class="text-area">
            <text class="title">{{title}}</text>
        </view>
        <view>
            哈哈哈哈编译成功了
        </view>
        <button @click="sendHttp">
            获取商品列表
        </button>
        <view class="">
            {{msg}}
        </view>
        <view class="">
            {{num}}
        </view>
        <button @click="add">num++</button>
       <!-- <button @click="goMine">我的</button> -->
       <!-- 跳转页面 /pages/xx/xx 注意不要加.vue后缀-->
       <navigator url="/pages/mine/mine">我的</navigator>
       <navigator url="/pages/info/info?id=110">详情页</navigator>
        <scroll-view class="myscoll" scroll-y="true">
            <view class="" v-for="(item,index) in 100" :key="index">
                {{item}}
            </view>
        </scroll-view>
        

    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Hello',
                num: 0,
                msg: "吞吞吐吐"

            }
        },
        onLoad() {

        },
        methods: {
            sendHttp() {
                uni.request({
                    url: "https://apif.java.crmeb.net/api/front/index",
                    method: "get",
                    success: (res) => {
                        console.log(res)
                    }
                })
            },
            add() {
                this.num++;
            },
            goMine(){
                
            }
        }
    }
</script>

<style>
    .myscoll {
        height: 300rpx;
        background: #555;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo {
        height: 200rpx;
        width: 200rpx;
        margin-top: 200rpx;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 50rpx;
    }

    .text-area {
        display: flex;
        justify-content: center;
    }

    .title {
        font-size: 36rpx;
        color: #8f8f94;
    }
</style>
