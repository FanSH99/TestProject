<template>
	<view :class="{navbar:true,bg:isNav}">
			<view class="left" @click="gobalck">
				<uni-icons type="back" size="20"></uni-icons>
			</view>
			<view class="search">
				搜索商品
			</view>
	</view>
</template>

<script>
	export default {
		props:{
			isNav:Boolean
		},
		methods:{
			gobalck(){
				uni.navigateBack(-1)
			}
		}
	}
</script>

<style scoped>
	.navbar{
		width: 100%;
		display: flex;
		height: 100rpx;
		padding:20rpx;
		box-sizing: border-box;
		position: fixed;
		top: 0;
		z-index: 999;
	}
	.left{
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		background: hsla(0,0%,100%,.3);
		text-align: center;
		line-height: 60rpx;
		border: 1px solid rgba(0,0,0,.07);
	}
	.search{
		width: 500rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		margin-left:55rpx;
		background: hsla(0,0%,100%,.3);
		border-radius: 30rpx;
		font-size: 28rpx;
		border: 1px solid rgba(0,0,0,.07);
	}
	.bg{
		background-color: #fff;
	}
</style>