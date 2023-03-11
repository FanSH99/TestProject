<template>
    <view>
        <view class="" v-if="loading">

        </view>
        <scroll-view scroll-y="true" class="pagescroll" @scroll='pagescroll' :scroll-into-view='scrollid'>
            <view class="top" id="top">
                <navbar :isNav="isNav"></navbar>
                <u-swiper :list="sliderImage" width="100%" :height="375" :indicator="true" indicatorMode="dot">
                </u-swiper>
            </view>
            <view class="content" v-if="goodsInfo" id="review">
                <view class="title">
                    <p class="price">{{goodsInfo.productInfo.price}}</p>
                    <p class="name">{{goodsInfo.productInfo.storeInfo}}</p>
                    <p class="msg">
                        <span>￥{{goodsInfo.productInfo.price}}</span>
                        <span>销量：{{goodsInfo.productInfo.stock}}</span>
                        <span>库存：{{goodsInfo.productInfo.sales}}</span>
                    </p>
                </view>
                <view class="hasSel">
                    <view>已选择：
                        <span>{{attr[0]}}</span>
                    </view>
                </view>
                <view class="review" id="recommend">
                    <p>用户评价<span>(10)</span></p>
                    <view class="">

                    </view>
                </view>
                <view class="recommend" id="detail">
                    优质推荐
                </view>
            </view>
            <view class="detail" id="detail">
                <view class="title">
                    商品详情
                </view>
                <!-- rich-text是微信小程序的富文本，node绑定节点，支持标签格式会自动解析， -->
                <rich-text :nodes="content" @itemclick="previewImage"></rich-text>
            </view>
            <view class="navlist" v-show="isNav">
                <view :class="{nav:true,active:activeIndex===index}" v-for="(item,index) in navList" :key="index"
                    @click="goScroll(index)">
                    {{item}}
                </view>
            </view>
            <view class="cartmenu">
                <uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick"
                    @buttonClick="buttonClick"></uni-goods-nav>
            </view>
           <view class="props" >
               <u-popup :show="show" @close="close" :closeable="true" customStyle=" min-height: 400rpx;
                   padding:50rpx 40rpx 40rpx;" round="10">
                   <cartSel :info="info" :show="show" :options="options" :buttonGroup="buttonGroup"></cartSel>
               </u-popup>
           </view>

        </scroll-view>
    </view>
</template>

<script>
    import {
        getGoodsInfo,
        addCollect,
        delCollect,

    } from '../../api/info.js'
    import navbar from '../../components/info/navbar.vue';
    import cartSel from '../../components/info/cartSel.vue';
    export default {
        data() {
            return {
                id: "",
                goodsInfo: null,
                info: [],
                loading: true,
                sliderImage: [],
                attr: [],
                content: "",
                urls: [],
                navList: ["商品", "评价", "推荐", "详情"],
                activeIndex: 0,
                isNav: false,
                scrollid: 'top',
                options: [{
                    icon: 'cart',
                    text: '购物车',
                    info: "",
                    infoBackgroundColor: 'red',
                    infoColor: "#fff"
                }, {
                    icon: 'star',
                    text: '收藏',
                    info: "",
                    infoBackgroundColor: 'red',
                    infoColor: "#fff"
                }],
                buttonGroup: [{
                        text: '加入购物车',
                        backgroundColor: '#ffa200',
                        color: '#fff'
                    },
                    {
                        text: '立即购买',
                        backgroundColor: '#ff0000',
                        color: '#fff'
                    }
                ],
                show: false,
            }
        },
        components: {
            navbar,
            cartSel,
        },
        methods: {
            pagescroll(e) {
                // console.log(e)
                // 获取滚动的高度
                let scrollTop = e.detail.scrollTop;
                if (scrollTop >= this.screenWidth) {
                    console.log(this.scrollid);
                    this.isNav = true;
                } else {
                    this.isNav = false;
                }
            },
            goScroll(index) {
                // console.log(index);
                this.activeIndex = index;
                switch (index) {
                    case 0:
                        this.scrollid = "top";
                        break;
                    case 1:
                        this.scrollid = 'review';
                        break
                    case 2:
                        this.scrollid = 'recommend'
                        break;
                    case 3:
                        this.scrollid = 'detail';
                        break
                }
            },
            previewImage(e) {
                uni.previewImage({
                    urls: this.urls,
                    current: e.detail.node.attrs.src,
                });
            },
            async onClick(e) {
                console.log(e.index);
                if (e.index == 0) {
                    // console.log("购物车");
                    let token = localStorage.getItem("authori-zation");
                    console.log(token);
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
                       console.log("加入购物车！！");
                    }
                }
                if (e.index == 1) {
                    // console.log("收藏");
                    // console.log(this.goodsInfo.userCollect);
                    let token = localStorage.getItem("authori-zation");
                    // console.log(token);
                    if (!token) {
                        console.log("请登录");
                        uni.navigateTo({
                            url: '/pages/login/login',
                            success: res => {},
                            fail: err => {
                                console.log(err);
                            },
                            complete: () => {}
                        });
                    } else {
                        if (!this.goodsInfo.userCollect) {
                        
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
                 
                }
            },
            close() {
                this.show = false;
            },
            buttonClick(e) {
                // console.log(e)
                this.show = true;          
            },
        },
        async onLoad(options) {
            // console.log(options.id);
            if (!options.id) {
                console.log("id不存在");
                uni.switchTab({
                    url: '/pages/index/index',
                    success: res => {
                        console.log(res);
                    },
                    fail: err => {
                        console.log(err);
                    },
                    complete: () => {}
                });

            } else {
                this.id = options.id;
                let res = await getGoodsInfo(options.id);
                // console.log(res);
                this.goodsInfo = res.data.data;
                // console.log(this.goodsInfo);
                // console.log(this.goodsInfo.userCollect);
                if (this.goodsInfo.userCollect) {
                    this.options[1].icon = "star-filled";
                    this.options = [...this.options];
                }
               
                let productAttr = this.goodsInfo.productAttr;
               let arr=[];
                productAttr.forEach(item=>{
                    
                    let attrs=item.attrValues.split(",");
                    // console.log(attrs);
                    item.attrs=attrs;
                    item.activeIndex=0;
                    arr.push(attrs[0])
                    
                })
                this.info = {
                    id: this.id,
                    browse: this.goodsInfo.productInfo.browse,
                    price: this.goodsInfo.productInfo.price,
                    otPrice: this.goodsInfo.productInfo.otPrice,
                    stock: this.goodsInfo.productInfo.stock,
                    sales: this.goodsInfo.productInfo.sales,
                    storeInfo: this.goodsInfo.productInfo.storeInfo,
                    storeName: this.goodsInfo.productInfo.storeName,
                    image: this.goodsInfo.productInfo.image,
                    unitName: this.goodsInfo.productInfo.unitName,
                    productAttr:productAttr,
                    userCollect:this.goodsInfo.userCollect,
                    productValue:this.goodsInfo.productValue,
                    attrInfo:arr.join(","),
                    
                }
                 this.loading = false;
                // console.log(this.info);
                // 轮播图片
                let sliderImage = this.goodsInfo.productInfo.sliderImage;
                // 将轮播图片string转换成数组格式
                sliderImage = JSON.parse(sliderImage);
                this.sliderImage = sliderImage;
                this.attr = this.goodsInfo.productAttr[0].attrValues.split(",");
                // console.log(this.attr);
                // 图片详情
                this.content = this.goodsInfo.productInfo.content;
                // 转换图片详情的格式病将图片地址存放到一个空数组中。
                this.content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, (match, capture) => {
                    this.urls.push(capture);
                });
                // console.log(this.content);
                let that = this;
                // 获取当前视图的宽度
                uni.getSystemInfo({
                    success(res) {
                        that.screenWidth = res.screenWidth;
                    }
                })

            }

        }
    }
</script>

<style scoped>
    .pagescroll {
        width: 100%;
        height: 100vh;
        background-color: #f1f1f1;

    }

    .content {
        padding: 0 20rpx;
    }

    .content view {
        border-radius: 10rpx;
        padding: 20rpx;
        margin: 20rpx 0;
        background: #fff;
    }


    .title .price {
        color: #ff0000;
        font-weight: 700;
    }

    .title .name {
        font-size: 34rpx;
        color: #000;
        font-weight: 700;
        margin: 40rpx 0;
    }

    .title .msg {
        display: flex;
        justify-content: space-between;
        font-size: 24rpx;
        color: #b4b4b4;
    }

    .hasSel {
        padding: 0 20rpx !important;
    }


    .detail .title {
        margin: 40rpx 0;
        text-align: center;
    }

    .navlist {
        width: 100%;
        padding: 20rpx;
        box-sizing: border-box;
        display: flex;
        position: fixed;
        top: 100rpx;
        left: 0;
        background-color: #fff;
        z-index: 9999;
    }

    .nav {
        width: 25%;
        text-align: center;
        font-size: 28rpx;
        position: relative;
    }

    .active::before {
        content: "";
        width: 70rpx;
        height: 5rpx;
        background-color: #70e038;
        position: absolute;
        bottom: -15rpx;
        left: 50%;
        margin-left: -35rpx;
    }

    .cartmenu {
        width: 100%;
        position: fixed;
        bottom: 0;
        height: 100rpx;
        background-color: #fff;
    }
</style>
