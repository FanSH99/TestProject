<template>
	<view class="content">
		<view class="status_bar">
					<!-- 这里是状态栏 -->
				</view>
		<sk-container v-if="loading">
			<view style="padding: 20rpx;">
				<sk-swiper></sk-swiper>
			</view>
			<sk-menu :cols='5'></sk-menu>
			<view style="padding: 0 30rpx 30rpx 30rpx;">
				<sk-waterfall></sk-waterfall>
			</view>
		</sk-container>
		<view class="bg">
			<view class="search">
				搜索商品
			</view>
			<myswiper :bannerList='bannerList'></myswiper>
		</view>
		<view class="goodsList">
			<view v-for="(item,index) in topList" :key="index" style="width: 48%;">
				<goods :item='item'></goods>
			</view>	
		</view>
	</view>
</template>
<script>
	import myswiper from '../../components/home/myswiper.vue'
	import {
		getBannerList,
		getTopList
	} from '../../api/home.js'
	import goods from '../../components/home/goods.vue'
	export default {
		data() {
			return {
				bannerList: [],
				topList: [],
				loading: true,

			}
		},
		components: {
			myswiper,
			goods
		},
		async onLoad() {
			// 获取首页轮播图
			let res = await getBannerList();
			this.bannerList = res.data.data.banner;
			let topList = await getTopList();
			console.log(topList)
			this.topList = topList.data.data
			this.loading = false
		},
		methods: {

		}
	}
</script>

<style scoped>
	page {
		width: 100%;
		min-height: 100%;
		background-color: #f1f1f1;
	}

	.bg {
		width: 100%;
		background: -webkit-linear-gradient(270deg, #e93323, #f5f5f5);
		padding: 20rpx 0;
	}

	.search {
		width: 95%;
		margin: 0 auto;
		height: 60rpx;
		border-radius: 30rpx;
		background-color: #fff;
		font-size: 25rpx;
		text-align: center;
		line-height: 60rpx;
		color: #919191;
	}

	.goodsList {
		width: 95%;
		margin: 20rpx auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.status_bar {
			height: var(--status-bar-height);
			width: 100%;
			background-color: #e93323;
		}
</style>
