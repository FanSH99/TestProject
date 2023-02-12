<template>
	<view v-if="info">
		<view class="address">
			<view class="tag">
				<uni-tag text="收货地址" type="primary" />
			</view>
			<view class="userinfo">
				<text>{{info.realName}}</text> <text>{{info.phone}}</text>
			</view>
			<view class="detail">
				{{info.province}}{{info.city}}{{info.district}}{{info.detail}}
			</view>
		</view>
		<view class="goodslist">
			<view class="title">
				共{{info.orderDetailList.length}}件商品
			</view>
			<view class="goods" v-for="(item,index) in info.orderDetailList" :key="index">
				<uni-list-chat :title="item.sku"
					:avatar="item.image" ote="您收到一条新的消息" :time="item.price"></uni-list-chat>
			</view>
			<view class="">
				<uni-list-item title="快递费用" rightText="免运费" />
			</view>
			<view class="msg">
				<uni-section title="备注" type="line" padding>
					<uni-easyinput type="textarea" v-model="msg" placeholder="请输入内容"></uni-easyinput>
				</uni-section>
			</view>
		</view>
		<view class="paytype">
			<view class="title">
				支付方式
			</view>
			<view class="">
				<view :class="payIndex===index?'payname activepay':'payname'" v-for="(item,index) in payType" @click="payIndex = index">
					{{item}}支付
				</view>
			</view>
		</view>
		<view class="price">
			<uni-list-item title="商品总价" :rightText="info.proTotalFee" />
		</view>
		<view class="sendbtn">
			<button type="warn" @click="submit">提交订单</button>
		</view>
		<view v-html='alipayhtml' style="display: none;">
			
		</view>
	</view>
</template>

<script>
	import {getOrderInfo,createPayOrder, payment} from '../../api/order.js'
	export default {
		data() {
			return {
			  msg:"",
			  payType:["微信","支付宝"],
			  payIndex:0,
			  info:null,
			  id:0,
			  alipayhtml:""
			}
		},
		async onLoad(option){
			let id  = option.id;
			this.id = id;
			let res = await getOrderInfo(id);
			console.log(res)
			this.info = res.data.data.orderInfoVo;
		},
		methods: {
			// 微信h5支付(返回一个h5支付链接) 支付宝h5支付(返回一个form表单 提交from表单就会支付)
		  async	submit(){
				// 创建支付订单
				let data = {
					addressId:this.info.addressId,
					couponId:0,
					mark:this.msg,
					payChannel:"weixinh5",
					payType:this.payIndex===0?"weixin":"alipay",
					phone:this.info.phone,
					preOrderNo:this.id,
					realName:this.info.realName,
					shippingType:1,
					storeId:0,
					useIntegral:false
				}
				let res = await createPayOrder(data);
				console.log(res.data.data.orderNo)
				let params = {
					orderNo:res.data.data.orderNo,
					payChannel:"weixinh5",
					payType:this.payIndex===0?"weixin":"alipay",
					scene:0
				}
				// 开启支付
				let result = await payment(params);
				console.log(result)
				if(this.payIndex===0){
					// 跳转到微信支付链接
					window.location.href = result.data.data.jsConfig.mwebUrl
				}else {
					console.log(result.data.data.alipayRequest)
					// 将支付宝支付表单放到页面上
					this.alipayhtml = result.data.data.alipayRequest;
					 this.$nextTick(()=>{
						 // 提交表单进行支付
						 document.forms[0].submit()
					 })
				}
			}
		}
	}
</script>

<style scoped>
	page {
		width: 100%;
		height: 100%;
		background-color: #f1f1f1;
	}

	.address,
	.goodslist,.paytype,.price,.sendbtn {
		width: 95%;
		margin: 20rpx auto;
		padding: 15rpx;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 10rpx;
	}

	.userinfo {
		font-size: 30rpx;
		margin: 20rpx 0;
	}

	.detail {
		font-size: 27rpx;
		color: #b4b4b4;
	}

	.title {
		font-size: 28rpx;
		color: #666;
	}

	.goods {
		margin: 20rpx 0;
	}
	.payname{
		width: 100%;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		font-size: 27rpx;
		color: #b4b4b4;
		border-radius: 10rpx;
		margin: 15rpx 0;
		border: 1px solid #f1f1f1;
	}
	.activepay{
		border-color: #ff6034;
		color: #ff6034 !important;
	}
</style>
