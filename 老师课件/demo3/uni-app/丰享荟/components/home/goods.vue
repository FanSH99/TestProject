<template>
	<view class="goods" @click="goInfo(item.id)">
		<image :src="item.image" mode="widthFix"></image>
		<view class="content">
			<view class="goodsname">
				{{item.storeName}}
			</view>
			<view class="otprice">
				¥{{item.otPrice}}
			</view>
			<view class="price">
				¥{{item.price}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object
		},
		methods:{
			goInfo(id){
				uni.navigateTo({
					url:"/pages/info/info?id="+id
				})
			}
		}
	}
</script>

<style scoped>
	.goods{
		width: 100%;
		background-color: #fff;
		margin-bottom: 20rpx;
	}
	image{	
		width: 100%;
	}
	.content{
		padding: 15rpx;
		box-sizing: border-box;
	}
	.goodsname{
		width: 100%;
		overflow: hidden;
		white-space:nowrap;
		text-overflow: ellipsis;
		font-size: 29rpx;
		font-weight: 700;
	}
	.otprice{
		font-size: 25rpx;
		color: #919191;
		text-decoration: line-through;
		margin: 15rpx 0;
	}
	.price{
		font-size: 32rpx;
		color: red;
		font-weight: 700;
	}
</style>