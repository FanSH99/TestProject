<template>
	<view>
		详情页
		<button @click="showTost">showTost</button>
	</view>
</template>

<script>
	import request from '../../utils/request.js';
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			showTost(){
				uni.showToast({
					title:"阿哈哈哈",
					icon:"none"
				})
			}
		},
		async onLoad(option){
			console.log(option.id)
		let res =await request(`https://apif.java.crmeb.net/api/front/index`,"get");
		console.log(res)
		}
	}
</script>

<style>

</style>
