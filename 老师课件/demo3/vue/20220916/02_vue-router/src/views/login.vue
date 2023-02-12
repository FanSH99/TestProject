<template>
    <div>
        <input type="text" placeholder="请输入用户名" v-model="username">
        <br>
        <input type="text" placeholder="请输入密码" v-model="password">
        <br>
        <button @click="login">登录</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                username:"",
                password:""
            }
        },
        methods:{
            login(){
                localStorage.setItem("token",this.username)
                this.$router.go(-1)
            }
        }
    }
</script>