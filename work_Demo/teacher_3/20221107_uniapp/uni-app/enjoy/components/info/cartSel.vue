<template>
    <view v-if="show">
        <view class="topInfo">
            <view class="left">
                <image :src="info.image" mode=""></image>
            </view>
            <view class="right">
                <text class="name">{{info.storeName}}</text>
                <text class="price">￥{{info.price}}</text>
                <text class="stock">库存：{{info.stock}}</text>
            </view>
        </view>
        <view class="attr" v-for="(item,index) in info.productAttr">
            <view class="title"> {{item.attrName}}</view>
            <view class="selAttr">
                <view v-for="(value,i) in item.attrs" :class="{mytag:true,active:i==item.activeIndex}"
                    @click="changeAttr(index,i)">{{value}}</view>
                <!-- <u-button type="primary" :text="value"></u-button> -->
            </view>
        </view>
        <view class="menus">
            <uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
                @buttonClick="buttonClick"></uni-goods-nav>
        </view>
    </view>
</template>

<script>
    import {
        buyOrder
    } from '../../api/info.js'
    export default {
        props: ["info", "show",'options','buttonGroup'],
        data() {
            return {
                // options: [{
                //     icon: 'cart',
                //     text: '购物车',
                //     info: "",
                //     infoBackgroundColor: 'red',
                //     infoColor: "#fff"
                // }, {
                //     icon: 'star',
                //     text: '收藏',
                //     info: "",
                //     infoBackgroundColor: 'red',
                //     infoColor: "#fff"
                // }],
                // buttonGroup: [{
                //         text: '加入购物车',
                //         backgroundColor: '#ffa200',
                //         color: '#fff'
                //     },
                //     {
                //         text: '立即购买',
                //         backgroundColor: '#ff0000',
                //         color: '#fff'
                //     }
                // ],


            }
        },
        methods: {
            changeAttr(index, i) {

                let attr = this.info.productAttr;
                attr[index].activeIndex = i;
                this.$set(this.info.productAttr, index, attr[index]);
                let arr = [];
                this.info.productAttr.forEach(item => {
                    let str = item.attrs[item.activeIndex]
                    arr.push(str)
                })
                // console.log(arr);      
                // console.log(this.info);
                this.info.image = this.info.productValue[this.info.attrInfo].image;
                this.info.price = this.info.productValue[this.info.attrInfo].price;
                this.info.stock = this.info.productValue[this.info.attrInfo].stock;
                this.$set(this.info, "attrInfo", arr.join(","))
            },
            async onClick(e) {
                if (e.index == 0) {
                    // console.log("购物车");
                    let token = localStorage.getItem("token");
                    // console.log(token);
                    if (!token) {
                        console.log("请登录");
                    } else {
                        console.log("进入购物车");
                    }
                }
                if (e.index == 1) {
                    // console.log("收藏");
                    // console.log(this.goodsInfo.userCollect);
                    if (!this.info.userCollect) {

                        let data = {
                            category: "product",
                            id: this.id
                        }
                        let res = await addCollect(data);
                        console.log(res);

                        if (res.data.code == "401") {
                            uni.navigateTo({
                                url: '/pages/login/login',
                                success: res => {},
                                fail: err => {
                                    console.log(err);
                                },
                                complete: () => {}
                            });
                            return;
                        }
                        if (res.data.code == "200") {
                            uni.showToast({
                                title: "收藏成功",
                                icon: 'none',
                            })
                            this.options[1].icon = "star-filled";
                            this.options = [...this.options];
                            return;
                        }
                        uni.showToast({
                            title: res.data.message,
                            icon: 'none'
                        })
                    } else {
                        let res = await delCollect(this.id);
                        console.log(res);
                        if (res.data.code == "401") {
                            uni.navigateTo({
                                url: '/pages/login/login',
                                success: res => {},
                                fail: err => {
                                    console.log(err);
                                },
                                complete: () => {}
                            });
                            return;
                        }
                        if (res.data.code == "200") {
                            uni.showToast({
                                title: res.data.message,
                                icon: 'none',
                            })
                            this.options[1].icon = "star";
                            this.options = [...this.options];
                            return;
                        }
                        uni.showToast({
                            title: "操作失败",
                            icon: 'none',
                        })
                    }

                }
            },
            async buttonClick(e) {
                console.log(e);
                let token = localStorage.getItem("authori-zation");
                // console.log(token);
                if (!token) {
                    uni.showToast({
                        title: '您未登录或验证码已过期'
                    });
                    uni.navigateTo({
                        url: '/pages/login/login',
                        success: res => {},
                        fail: () => {},
                        complete: () => {}
                    });
                } else {
                    if (e.index == 0) {
                        console.log('加入购物车');
                    }
                    if (e.index == 1) {
                        console.log('立即购买');

                        let info = this.info.productValue[this.info.attrInfo];
                        console.log(info)
                        let data = {
                            orderDetails: [{
                                attrValueId: info.id,
                                productId: info.productId,
                                productNum: 1,
                            }],

                            preOrderType: "buyNow"
                        }

                        let res = await buyOrder(data);
                        console.log(res);
                        // localStorage.setItem("preOrderNo",res.data.preOrderNo);
                        if (res.data.code == 200) {
                            uni.navigateTo({
                                url: `/pages/comfirmOrder/comfirmOrder?preOrderNo=${res.data.data.preOrderNo}`,
                                success: res => {},
                                fail: err => {
                                    console.log(err);
                                },
                                complete: () => {}
                            });
                        } else {
                            uni.showToast({
                                title: '操作失败'
                            });
                        }
                        
                    }

                }
            },
        },
        
    }
</script>

<style scoped>
    .topInfo {
        display: flex;
        justify-content: space-between;
    }

    .left {
        width: 25%;
    }

    .left image {
        width: 22vw;
        height: 22vw;
        border-radius: 10rpx;
    }

    .right {
        width: 75%;
        padding-left: 30rpx;
        display: flex;
        flex-direction: column;

    }

    .right .name {
        font-size: 30rpx;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .right .price {
        font-size: 34rpx;
        color: #ff7600;
        margin: 40rpx 0 10rpx 0;

    }

    .right .stock {
        font-size: 28rpx;
        color: #b4b4b4;
    }

    .attr {
        margin-top: 20rpx;
        color: #b4b4b4;
        font-size: 30rpx;
    }

    .attr .title {
        margin: 10rpx 0;
    }

    .selAttr {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
    }

    .mytag {
        margin: 10rpx 20rpx;
        background-color: #f1f1f1;
        color: #000;
        border: 1px solid #f1f1f1;
        padding: 6rpx 16rpx;
        border-radius: 10rpx;
        font-size: 28rpx;
    }

    .active {
        border: 1px solid #e93323;
        background: #fdebe9;
        color: #e93323 !important;
    }
</style>
