<template>
	<scroll-view :scroll-y="true" class="pagescroll" @scroll='pagescroll' :scroll-into-view='scrollid'
		:scroll-with-animation='true' :scroll-top="top">
		<view id="goods">
			<navbar :isNav='isNav'></navbar>
		</view>
		<myswiper :screenWidth='screenWidth' :sliderlist='sliderlist'></myswiper>
		<view class="info" v-if='info'>
			<view class="price">
				¥{{info.price}}
			</view>
			<view class="goodsname">
				{{info.storeName}}
			</view>
			<view class="content">
				<view class="oltprice">
					¥{{info.otPrice}}
				</view>
				<view class="stork">
					库存：{{info.stock}}
				</view>
				<view class="sales">
					销量：{{info.sales}}
				</view>
			</view>
		</view>
		<view class="changetype" @click="showSku">
			<view class="left">
				已选择：{{sku}}
			</view>
			<view class="right">
				<uni-icons type="forward" size="16" color="#919191"></uni-icons>
			</view>
		</view>
		<view class="pingjia" id="pingjia">
			<view class="title">
				商品评价
			</view>
		</view>
		<view class="like" id="tuijian">
			<view class="title">
				优品推荐
			</view>
		</view>
		<view class="con" id="content" >
			<view class="title">
				商品详情
			</view>
			<rich-text :nodes="content" @itemclick="previewImage"></rich-text>
		</view>
		<view class="navlist" v-show="isNav">
			<view :class="{nav:true,active:activeIndex===index}" v-for="(item,index) in navList" :key="index"
				@click="goScroll(index)">
				{{item}}
			</view>
		</view>
		<view class="btn">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="showSku"
				@buttonClick="showSku" />
		</view>
		<skupup ref="skuref" :productAttr='productAttr' @sendsku='getsku' :info='info' @getorder='getorder'></skupup>
	</scroll-view>
</template>

<script>
	import {getOrder} from '../../api/order.js'
	import {
		getGoodsInfo
	} from '../../api/home.js'
	import navbar from '../../components/info/navbar.vue'
	import myswiper from '../../components/info/myswiper.vue'
	import skupup from '../../components/info/skupup.vue'
	export default {
		data() {
			return {
				screenWidth: 375,
				sliderlist: [],
				content: "",
				navList: ["商品", "评价", "推荐", "详情"],
				activeIndex: 0,
				isNav: false,
				info: {
					image:"",
					otPrice:0,
					price:0,
					stock:0,
					sales:0,
					storeName:""
				},
				scrollid: "goods",
				top: 0,
				options: [{
					icon: 'chat',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 0,
					infoBackgroundColor: '#007aff',
					infoColor: "#f5f5f5"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 0
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
				urls: [],
				// 存放商品规格
				productAttr:[],
				sku:"",
				productValue:[],
				skuId:0,
				productId:0
			}
		},
		components: {
			navbar,
			myswiper,
			skupup
		},
		methods: {
			pagescroll(e) {
				// console.log(e)
				// 获取滚动的高度
				let scrollTop = e.detail.scrollTop;
				if (scrollTop >= this.screenWidth) {
					this.isNav = true;
				} else {
					this.isNav = false
				}
			},
			goScroll(index) {
				this.activeIndex = index;
				switch (index) {
					case 0:
						this.scrollid = "goods";
						break;
					case 1:
						this.scrollid = 'pingjia';
						break
					case 2:
						this.scrollid = 'tuijian'
						break;
					case 3:
						this.scrollid = 'content';
						break
				}
			},
			addcart() {

			},
			onClick() {

			},
			previewImage(e){
					uni.previewImage({
							urls:this.urls,
							current:e.detail.node.attrs.src,
						});
			},
			showSku(){
				// 显示pop弹出层
				this.$refs.skuref.open();
			},
			// 获取当前选中的sku规格
			getsku(sku){
				console.log(sku)
				this.sku  = sku;
				console.log(this.productValue)
				// 获取 规格所对应的商品信息
				let info = this.productValue[sku];
				console.log(info)
				this.info.otPrice = info.otPrice;
				this.info.price = info.price;
				this.info.image = info.image;
				this.info.stock = info.stock;
				this.info.sales = info.sales
				this.skuId = info.id;
			},
			async getorder(num){
				let orderDetails = [
					{   
						// sku 规格id
						attrValueId:this.skuId,
						//产品id
						productId:this.productId,
						// 产品数量
						productNum:num
					}
				]
				let data = {
					orderDetails:orderDetails,
					preOrderType:"buyNow"
				}
				// 用户下单
				let res = await getOrder(data);
				uni.navigateTo({
					url:"/pages/confirmOrder/confirmOrder?id="+res.data.data.preOrderNo
				})
			}
		},
		async onLoad(option) {
			let id = option.id;
			this.productId = id;
			let res = await getGoodsInfo(id);
			console.log(res.data.data)
			// 处理productAttr
			res.data.data.productAttr.forEach(item=>{
				item.attrValues = item.attrValues.split(",")
			})
			this.productAttr = res.data.data.productAttr
			this.productValue = res.data.data.productValue
			this.sliderlist = JSON.parse(res.data.data.productInfo.sliderImage)
			// console.log(this.sliderlist)
			this.content = res.data.data.productInfo.content;
			this.info = res.data.data.productInfo;
			// 获取富文本内容中的所有imgsrc地址
			this.content.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, (match, capture) => {
				this.urls.push(capture);
			});
			let that = this;
			// 获取当前视图的宽度
			uni.getSystemInfo({
				success(res) {
					that.screenWidth = res.screenWidth;
				}
			})
		}
	}
</script>

<style scoped>
	.pagescroll {
		width: 100%;
		height: 100vh;
		background-color: #f1f1f1;
	}

	.info,
	.changetype {
		width: 95%;
		margin: 20rpx auto;
		padding: 15rpx;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 10rpx;
	}

	.price {
		font-size: 30rpx;
		font-weight: 600;
		color: red;
	}

	.goodsname {
		font-size: 32rpx;
		font-weight: bold;
		line-height: 50rpx;
		color: #555;
		margin: 15rpx 0;
	}

	.content {
		display: flex;
		justify-content: space-between;
		font-size: 27rpx;
		color: #b4b4b4;
	}

	.changetype {

		font-size: 28rpx;
		color: #919191;
		display: flex;
		justify-content: space-between;
	}

	.pingjia,
	.like {
		width: 95%;
		margin: 20rpx auto;
		padding: 15rpx;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 10rpx;
		height: 300rpx;
	}

	.title {
		width: 100%;
		text-align: center;
		color: #919191;
		font-size: 27rpx;
	}

	.con .title {
		margin-bottom: 20rpx;
	}

	.navlist {
		width: 100%;
		padding: 20rpx;
		box-sizing: border-box;
		display: flex;
		position: fixed;
		top: 100rpx;
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

	.btn {
		width: 100%;
		position: fixed;
		bottom: 0;
	}
</style>
