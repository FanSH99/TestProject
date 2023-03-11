<template>
    <view class="content">
        <image class="logo" src="/static/logo.png"></image>
        <view class="text-area">
            <text class="title">{{ title }}</text>
        </view>
        <swiper :indicator-dots="true" class="swiper">
            <swiper-item>
                <u-grid :border="true">
                    <u-grid-item :customStyle="{width:220+'rpx',height:220+'rpx'}" v-for="(item, index) in swiperList"
                        :index="index" :key="index">
                        <u-icon :customStyle="{paddingTop:20+'rpx'}" :name="item" :size="22"></u-icon>
                        <text class="grid-text">{{ '宫格' + (index + 1) }}</text>
                    </u-grid-item>
                </u-grid>
            </swiper-item>
            <swiper-item>
                <u-grid :border="true">
                    <u-grid-item :customStyle="{width:220+'rpx',height:220+'rpx'}" v-for="(item, index) in swiperList"
                        :index="index + 9" :key="index">
                        <u-icon :customStyle="{paddingTop:20+'rpx'}" :name="item" :size="22"></u-icon>
                        <text class="grid-text">{{ '宫格' + (index + 1) }}</text>
                    </u-grid-item>
                </u-grid>
            </swiper-item>
            <swiper-item>
                <u-grid :border="true">
                    <u-grid-item :customStyle="{width:220+'rpx',height:220+'rpx'}" v-for="(item, index) in swiperList"
                        :index="index + 18" :key="index">
                        <u-icon :customStyle="{paddingTop:20+'rpx'}" :name="item" :size="22"></u-icon>
                        <text class="grid-text">{{ "宫格" + (index + 1) }}</text>
                    </u-grid-item>
                </u-grid>
            </swiper-item>
        </swiper>
        <u-button type="primary" :plain="true" text="镂空"></u-button>

        <u-cell-group>
            <u-cell title="夕阳无限好" arrow-direction="down" label="1111">
                <u-icon slot="icon" size="32" name="search"></u-icon>
                <!-- <u-badge count="99" :absolute="false" slot="right-icon"></u-badge> -->
                <u-switch slot="right-icon" v-model="checked"></u-switch>
            </u-cell>
            <u-cell icon="setting-fill" title="只是近黄昏"></u-cell>
        </u-cell-group>

        <u-action-sheet :actions="list" :title="title" :show="show" :closeOnClickOverlay="true"
            :closeOnClickAction="true" @select="selectClick" cancelText="取消"></u-action-sheet>
        <u-button @click="show = true">打开ActionSheet</u-button>
        <!-- <view class="goods-carts">
            <uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
                @buttonClick="buttonClick" />
        </view> -->
        <u-line-progress :percentage="30" activeColor="#ff0000"></u-line-progress>

       
    </view>
</template>

<script>
    export default {
        data() {
            return {
                swiperList: ['integral', 'kefu-ermai', 'coupon', 'gift', 'scan', 'pause-circle', 'wifi', 'email',
                    'list'],
                title: 'Hello',
                checked: false,
                list: [{
                        name: '选项一',
                        subname: "选项一描述",
                        color: '#ffaa7f',
                        fontSize: '20'
                    },
                    {
                        name: '选项二',

                    },
                    {
                        name: '选项三禁用',
                        disabled: true
                    },

                    {
                        name: '开启load加载', //开启后文字不显示
                        loading: true
                    }
                ],
                show: false,
                options: [{
                    icon: 'chat',
                		  text: '客服'
                }, {
                			 icon: 'shop',
                    text: '店铺',
                    info: 2,
                				infoBackgroundColor: '#007aff',
                    infoColor: "#f5f5f5"
                }, {
                    icon: 'cart',
                    text: '购物车',
                    info: 2
                }],
                buttonGroup: [{
                			     text: '加入购物车',
                        backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
                        color: '#fff'
                    },
                    {
                        text: '立即购买',
                        backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
                        color: '#fff'
                    }
                ],


            }
        },
        onLoad() {

        },
        methods: {
            open() {
                // console.log('open');
            },
            close() {
                this.show = false
                // console.log('close');
            },
            selectClick(index) {
                console.log(index)
            }
        }
    }
</script>

<style>
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
        color: #333;
    }
    
        .swiper {
            height: 720rpx;
            background: red;
        }
    
        .grid-text {
            font-size: 14px;
            color: #333444;
            padding: 10rpx 0 20rpx 0rpx;
            /* #ifndef APP-PLUS */
            box-sizing: border-box;
            /* #endif */
        }
</style>
