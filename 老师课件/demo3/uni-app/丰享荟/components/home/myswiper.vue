<template>
	<view class="myswiper">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in bannerList" :key="index">
				<view class="swiper-item">
					<image :src="item.pic" mode="widthFix" class="img"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			bannerList:Array
		}
	}
</script>

<style scoped>
	.img{
		width: 100%;
	}
	.myswiper{
		width: 95%;
		margin: 20rpx auto;
	}
	swiper{
		height: 280rpx;
	}
</style>