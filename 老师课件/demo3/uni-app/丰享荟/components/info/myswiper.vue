<template>
	<view class="myswiper">
			<swiper :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500" :style="{'height':screenWidth+'px'}" :circular="true">
				<swiper-item v-for='(item,index) in sliderlist' :key="index">
					<view class="swiper-item">
							<image :src="item" mode="widthFix" class="img"></image>
					</view>
				</swiper-item>
			</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			screenWidth:Number,
			sliderlist:Array
		}
	}
</script>

<style scoped>
	.img{
		width: 100%;
	}
</style>