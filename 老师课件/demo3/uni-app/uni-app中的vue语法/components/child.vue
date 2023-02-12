<template>
	<view>
		我是一个子组件 {{mymsg}}
		<button @click="senduser">向父组件传值</button>
		<slot :username='user.name'></slot>
	</view>
</template>

<script>
import bus from '../bus';
	export default {
		name:"child",
		props:{
			// mymsg:{
			// 	type:String,
			// 	default(){
			// 		return"无"
			// 	}
			// }
			mymsg:String
		},
		created(){
			bus.$on("gettitle",(title)=>{
				console.log(title)
			})
		},
		data() {
			return {
				user:{
					name:"张三",
					age:18
				}
			};
		},
		watch:{
			
		},
		methods:{
				// 子组件向父组件传值：1.在子组件中使用this.$emit()发送自定义事件 2.在父组件中的子组件标签上接受自定义事件。
			  senduser(){
				  this.$emit("senduser",this.user)
			  }
		},
		computed:{
			
		}
	}
</script>

<style scoped>
view{
	width: 100%;
	height: 300rpx;
	background-color: red;
	color: #fff;
}
</style>