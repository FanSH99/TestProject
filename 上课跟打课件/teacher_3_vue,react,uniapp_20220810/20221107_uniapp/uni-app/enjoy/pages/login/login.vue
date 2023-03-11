<template>
    <view class="login">
        <u-icon name="arrow-left"></u-icon>
        <view class="form">
            <view class="title">短信登录</view>
            <view class="content">
                <u--form labelPosition="left" :model="userInfo" :rules="rules" ref="form">
                    <u-form-item prop="phone" borderBottom ref="item1">
                        <u--input v-model="userInfo.phone" placeholder="请输入手机号" border="none" @change="change"
                            description="如果选择保密会报错"></u--input>
                    </u-form-item>
                    <u-form-item prop="captcha" borderBottom ref="item2">
                        <u--input v-model="userInfo.captcha" placeholder="请输入验证码" border="none" @change="change"></u--input>
                        <u-button slot="right" type="primary" @click="getCode" :disabled="disabled">{{codeMsg}}
                        </u-button>
                    </u-form-item>
                    <u-button type="error" @click="submit" :disabled="!check">登录</u-button>
                </u--form>

            </view>
        </view>

    </view>
</template>

<script>
    import {
        sendCode,
        userLogin
    } from '../../api/login.js'
    export default {
        data() {
            return {
                userInfo: {
                    phone: '',
                    captcha: '',
                },
                rules: {
                    phone: {
                        type: 'string',
                        required: true,
                        len: 11,
                        message: '请填写11位手机号',
                        trigger: ['blur', 'change']
                    },
                    captcha: {
                        type: 'string',
                        required: true,
                        len: 6,
                        message: '请填写6位验证码',
                        trigger: ['blur','change']
                    },
                },
                disabled: true,
                codeTime: 60,
                timer: null,
                codeMsg: "发送验证码",
                check: false,
                
            }
        },
        methods: {
            change() {

               this.disabled=true;
               this.check=false;
               if(this.userInfo.captcha.length===6&&this.userInfo.phone.length===11){
                   // console.log("校验成功");
                   this.check=true;
                    this.disabled=false; 
               }
               
               if(this.userInfo.phone!==''&&this.userInfo.phone.length!==11){
                   this.disabled=true;              
               }else{
                   this.disabled=false
               }
               
               
            },
            async getCode() {
                let res = await sendCode(`phone=${this.userInfo.phone}`);          
                console.log(res);
                if (res.data.code != 200) {
                    this.$refs.item1.message = res.data.message;
                } else {
                    uni.showToast({
                        title: "发送成功",
                        icon: 'none'
                    })
                }
                let timer = this.timer;
                this.disabled = true;
                timer = setInterval(() => {
                    if (this.codeTime == 1) {
                        this.codeTime = 60;
                        this.timer = null;
                        clearInterval(timer);
                        this.codeMsg = '重新发送验证码';
                        this.disabled = false;
                        return;
                    }
                    this.codeTime--;
                    this.codeMsg = `${this.codeTime}秒后重新发送`;
                    this.rules.phone.message = '请输入手机号';
                    // console.log(this.codeTime);
                }, 1000);

            },
            async submit() {
              
                let res= await userLogin(this.userInfo);
                console.log(res);
                if(res.data.code==200){
                    uni.showToast({
                        title: "登录成功",
                        icon: 'none'
                    })
                    localStorage.setItem("authori-zation",res.data.data.token);
                    localStorage.setItem("uid",res.data.data.uid) ;
                    uni.navigateBack({
                        delta: 1
                    });
                }else{
                    uni.showToast({
                        title:res.data.message,
                        icon: 'none'
                    })
                }
                 
            }
           

        },
        onLoad() {

        }

    }
</script>

<style scoped>
    page {
        background-color: #fff;
        padding: 100rpx 40rpx;
    }


    .form {
        margin: 200rpx 40rpx 0;
    }

    .title {
        font-size: 48rpx;
        font-weight: 500;
        margin: 0 -10rpx 40rpx;
    }
</style>
