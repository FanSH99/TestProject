<template>
	<view class="pop">
		<uni-popup ref="popup" type="bottom" background-color="#fff">
			<view class="sku">
				<view class="close">
					<uni-icons type="closeempty" size="20" color="#e4e4e4" @click="close"></uni-icons>
				</view>
				<view class="goodsinfo">
					<view class="goodsImg">
						<image
							:src="info.image"
							mode="widthFix"></image>
					</view>
					<view class="goods_right">
						<view class="goodsname">
							{{info.storeName}}
						</view>
						<view class="price">
							￥{{info.price}}
						</view>
						<view class="stock">
							￥{{info.stock}}
						</view>
					</view>
				</view>
				<view class="skuList">
					<view class="skuitem" v-for="(item,index) in productAttr" :key="index">
						<view class="skuname">
							{{item.attrName}}
						</view>
						<view class="skuvalue">
							<view :class="sel[index]===i?'value active':'value'" v-for="(values,i) in item.attrValues" :key="i" @click="changeAttr(index,i)">
								{{values}}
							</view>
						</view>
					</view>
				</view>
				<view class="num">
					<view class="title">
						数量:
					</view>
					<view class="ste">
						<uni-number-box @change="changeValue" />
					</view>
				</view>
				<view class="btn">
					<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @buttonClick="rightclick" />
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		props:{
			productAttr:Array,
			info:Object
		},
		data(){
			return {
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
			active:0,
			// 存储每个属性所对应的选中的属性值的索引
			// 	sel索引表示每个属性的索引 sel中索引所对应的索引值表示当前属性所选中的的属性值的索引
			sel:[],
			num:1
		}
		},
		methods: {
			open() {
				this.$refs.popup.open('bottom')
			},
			close() {
				this.$refs.popup.close();
			},
			changeValue(e) {
			 console.log(e)
			 this.num = 1
			},
			addcart(){
				
			},
			rightclick(e){
				console.log(e)
				if(e.index ===1){
					// 获取本地存储的token 若存在则已登录 若不存在则 未登录
					let token = uni.getStorageSync("token");
					console.log(token)
					if(!token){
						uni.navigateTo({
							url:"/pages/login/login"
						})
						return
					}
					// 子组件向父组件传值要下单啦
					this.$emit("getorder",this.num)
				}
				
			},
			changeAttr(index,i){
				// index 表示但前点击的属性名的索引 i 表示当前点击的属性值的索引
				this.sel[index] = i
				this.$set(this.sel,index,i)
				this.getSku()
			},
			//获取选中规格值
			getSku(){
				// 根据sel索引获取属性名
				let keys = [];
				this.sel.forEach((item,index)=>{
					let attrValue = this.productAttr[index].attrValues[item];
					console.log(attrValue)
					keys.push(attrValue)
				})
				let sku = keys.join(",")
				console.log(sku)
				//将获取的规格名称传递给父组件
				this.$emit("sendsku",sku)
			}
		},
		watch:{
			productAttr(newVal){
				this.sel = [];
				newVal.forEach(item=>{
					this.sel.push(0)
				})
				this.getSku();
			}
		}
	}
</script>

<style scoped>
	.sku {
		background-color: #fff;
		max-height: 80vh;
		overflow: auto;
		min-height: 60vh;
		padding: 0 20rpx;
		box-sizing: border-box;
		padding-bottom: 55px;
	}

	.close {
		padding: 20rpx 0;
		box-sizing: border-box;
		text-align: right;
	}

	.goodsinfo {
		display: flex;
		justify-content: space-between;
	}
	.skuitem{
		margin-top: 20rpx;
	}
	.goodsImg {
		width: 25%;
	}

	.goodsImg image {
		width: 100%;
	}

	.goods_right {
		width: 72%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: 20rpx;
		box-sizing: border-box;
	}

	.goodsname {
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 30rpx;
		color: #555;
		height: 90rpx;
	}

	.price {
		color: #ff7600;
		font-size: 32rpx;
		font-weight: bolder;
	}

	.stock {
		color: #b4b4b4;
		font-size: 28rpx;
	}

	.skuname {
		font-size: 30rpx;
		color: #b4b4b4;
	}

	.skuvalue {
		display: flex;
		flex-wrap: wrap;
	}

	.value {
		padding: 10rpx 20rpx;
		background-color: #f1f1f1;
		border: 1px solid #f1f1f1;
		border-radius: 40rpx;
		font-size: 28rpx;
		margin-top: 15rpx;
		margin-right: 15rpx;
	}

	.num {
		display: flex;
		justify-content: space-between;
		margin: 20rpx 0;
	}

	.num .title {
		font-size: 27rpx;
		color: #b4b4b4;
		padding-top: 7rpx;
	}
	.btn{
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 999;
	}
	.active{
		border: 1px solid #e93323;
		    background-color: #fdebe9!important;
		    color: #e93323!important;
	}
</style>
