<template>
	<view>
		我也是个子组件
		<slot name="header" :title="title"></slot>
		<button @click="sendTile">向兄弟组件传值</button>
		<!-- <slot></slot> -->
		<slot name='footer'></slot>
	</view>
</template>

<script>
import bus from '../bus';
	export default {
		name:"two",
		data() {
			return {
				title:"好好学习"
			};
		},
		methods:{
			sendTile(){
				bus.$emit("gettitle",this.title)
			}
		}
	}
</script>

<style scoped>
view{
	width: 100%;
	height: 300rpx;
	background-color: blue;
}
</style>