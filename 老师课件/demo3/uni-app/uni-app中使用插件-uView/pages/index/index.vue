<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<u-button type="primary" :plain="true" text="镂空"></u-button>
		<u-cell-group>
			<u-cell title="夕阳无限好" arrow-direction="down">
				<u-icon slot="icon" size="32" name="search"></u-icon>
				<!-- <u-badge count="99" :absolute="false" slot="right-icon"></u-badge> -->
				<u-switch slot="right-icon" v-model="checked"></u-switch>
			</u-cell>
			<u-cell icon="setting-fill" title="只是近黄昏"></u-cell>
		</u-cell-group>
		<u-action-sheet :actions="list" :title="title" :show="show"></u-action-sheet>
		<u-button @click="show = true">打开ActionSheet</u-button>
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				title: 'Hello',
				checked: true,
				title: '标题',
				list: [{
						name: '选项一',
						subname: "选项一描述",
						color: '#ffaa7f',
						fontSize: '20'
					},
					{
						name: '选项二禁用',
						disabled: true
					},
					{
						name: '开启load加载', //开启后文字不显示
						loading: true
					}
				],
				show: false
			}
		},
		onLoad() {

		},
		methods: {
			onClick() {

			}
		}
	}
</script>

<style>

</style>
