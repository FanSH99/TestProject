<template>
	<view>
		<!-- 父组件向子组件传值：
		 1.在父组件的子组件标签上绑定一个自定义属性
		 2.在子组件中使用props接受
		 -->
		<mychild :mymsg='msg' @senduser='getuser'>
		   <template #default ='{username}'>
		   	<view>{{username}}</view>
		   </template>
		</mychild>
		<twochild ref='two'>
		   <template #header="{title}">
		   	<view>header{{title}}</view>
		   </template>
		   <template #footer>
		   	<view>footer</view>
		   </template>
		</twochild>
		<view ref='myview'>
			我是一个view组件
		</view>
		<button @click="getView">获取view</button>
		<view class="" v-for="(item,index) in list" :key="index">
				{{item}}
		</view>
		<button @click="changeList">改变list</button>
		<button @click="getList">跨域请求</button>
		<button @click="goInfo">详情</button>
	</view>
</template>

<script>
	import mychild from '../../components/child.vue'
	import twochild from '../../components/two.vue'
	export default {
		data() {
			return {
				msg:"我是父组件中的数据",
				list:[0,1,2,3]
			}
		},
		components:{
			mychild,
			twochild
		},
		methods: {
			getuser(user){
				console.log(user)
			},
			getView(){
			   console.log(	this.$refs.myview)
			   console.log(this.$refs.two.title)
			},
			changeList(){
				// 在vue中不可以监听数组中每一项的改变，而是通过重写处理数组的其中方法实现对数组的监听
				// this.list[0] = 100;
				this.$set(this.list,0,100)
				this.$nextTick(()=>{
					console.log("dom更新结束之后之行")
				})
			},
			getList(){
				uni.request({
				    url:"/api/RoomApi/live?offset=0&limit=20",
					method:"GET",
					success(res){
						console.log(res)
					}
				})
			},
			goInfo(){
				uni.navigateTo({
					url:"/pages/info/info?id="+110
				})
			}
		}
	}
</script>

<style>

</style>
