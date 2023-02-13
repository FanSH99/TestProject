<template>
    <div class="login">
       <input type="text" placeholder="请输入用户名" v-model="uname"><br>
       <input type="password" placeholder="请输入密码" v-model="pwd"><br>
       <button @click="login">登录</button>
    </div>
</template>
<script>

export default {
    data() {
        return {
            uname: '',
            pwd: "",
            state:"未登录",
        }
    },
    methods: {
        login() {
            if (localStorage.getItem("name")) {
                alert("你已经登录过");
            } else {
                localStorage.setItem("name", this.uname);
                this.$router.go(-1);
            }
            
        }
    }

}
</script>
<style>
    .login{
        margin:20px 0;
    }
    .login input{
        margin:5px 0;
    }
</style>
