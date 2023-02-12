<template>
	<view>
		我是一个组件
	</view>
</template>

<script>
	export default {
		name:"mychild",
		data() {
			return {
				
			};
		},
		beforeCreate(){
				console.log("创建前")
		},
		created(){
				console.log("创建后")
		},
		beforeMount(){
				console.log("渲染前")
		},
		mounted(){
				console.log("渲染后")
		}
	}
</script>

<style>
view{
	width: 100%;
	height: 300rpx;
	background-color: red;
	color: #fff;
}
</style>