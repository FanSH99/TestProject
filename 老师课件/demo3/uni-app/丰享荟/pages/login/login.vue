<template>
	<view>
		<view class="login">
		<view class="phone">
				<uni-easyinput prefixIcon="phone" v-model="phone" placeholder="请输入手机号"></uni-easyinput>
		</view>
		<view class="code">
			<view class="">
				<uni-easyinput prefixIcon="help" v-model="code" placeholder="请输入验证码"></uni-easyinput>
			</view>
			<view class="sendcode" @click="send">
				发送验证码
			</view>
		</view>
		<view class="loginbtn">
				<button type="primary" @click="login">登录</button>
		</view>
		</view>
	</view>
</template>

<script>
	import {sendCode,userLogin} from '../../api/login.js'
	export default {
		data() {
			return {
				phone:"",
				code:""
			}
		},
		methods: {
			async send(){
				let data = {
					phone:this.phone
				}
				let res = await sendCode(data);
				console.log(res)
			},
			async login(){
				let data = {
					phone:this.phone,
					captcha:this.code
				}
				let res = await userLogin(data);
				console.log(res)
				if(res.data.code===200){
					uni.showToast({
						title:"登录成功",
						icon:"success"
					})
					// 将token存入本地
					uni.setStorage({
						key:"token",
						data:res.data.data.token
					})
					uni.navigateBack(-1)
				}else{
					uni.showToast({
						title:res.data.message,
						icon:"error"
					})
				}
			}
		}
	}
</script>

<style scoped>
	page{
		width: 100%;
		height: 100%;
		background-color: #f1f1f1;
	}
	.login{
		width: 90%;
		margin: 100rpx auto;
	}
	.login>view{
		margin-bottom: 30rpx;
	}
	.code{
		display: flex;
	}
	.sendcode{
		height: 35px;
		line-height: 35px;
		/* width: 30%; */
		text-align: center;
		font-size: 27rpx;
		color: #b4b4b4;
		margin-left: 40rpx;
	}
</style>
