<template>
	<view>
		<h1>购物车页面</h1>
		<mychild></mychild>
	</view>
</template>

<script>
	import mychild from '../../components/mychild.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			mychild
		},
	    onLoad(){
			console.log("页面加载")
		},
		onShow(){
			console.log("页面显示")
		},
		onReady(){
			console.log("页面渲染完成")
		},
		onHide(){
			console.log("页面隐藏")
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
