<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view>
				哈哈哈哈编译成功啦
		</view>
		<scroll-view scroll-y="true" class="myscoll">
			<view v-for="(item,index) in 100"  :key="index">1</view>
		</scroll-view>
		<button @click="sendHttp">
			获取商品列表
		</button>
		<view class="">
			{{msg}} {{num}}
		</view>
		<button @click="add">++</button>
		<navigator url="/pages/mine/mine">我的</navigator>
		<navigator url="/pages/info/info?id=110">详情</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				msg:"好好学习天天向上",
				num:0
			}
		},
		onLoad() {

		},
		methods: {
			sendHttp(){
				uni.request({
					url:"https://apif.java.crmeb.net/api/front/index",
					method:"GET",
					success:(res)=>{
						console.log(res)
					},
					fail(err){
						console.log(err)
					}
				})
			},
			add(){
				this.num ++ ;
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
		color: #8f8f94;
	}
	.myscoll{
		height: 300rpx;
		background-color: #555;
	}
</style>
