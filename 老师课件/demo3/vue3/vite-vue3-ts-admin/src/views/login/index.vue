<template>
    <div class="login">
        <div class="content">
            <h3>用户登录</h3>
            <div>
                <el-input v-model="username" placeholder="请输入用户名"
                    :prefix-icon="User" />
            </div>
            <div>
                <el-input v-model="password" placeholder="请输入密码"
                    :prefix-icon="Lock" type="password"  clearable/>
            </div>
            <div>
                <el-button type="primary" @click="Login" :loading="loginLoading">{{loginLoading?'登录中...':"登录"}}</el-button>
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { User,Lock} from '@element-plus/icons-vue'
import showMessage from '../../utils/showMessage'
import {userLogin} from '../../api/login'
import {useStore} from 'vuex'
import { ref } from 'vue';
import {useRouter} from 'vue-router'
// 获取仓库实例
let store = useStore();
let router = useRouter();
// 当前输入的用户名
let username = ref("");
// 当前输入的密码
let password = ref("");
// 是否登录中
let loginLoading = ref(false)
// 用户登录
let Login = async ()=>{
    if(!username.value || !password.value){
        showMessage("请您补充完整信息！",'warning')
        return
    }
    let data:LoginParams = {
        username:username.value,
        password:password.value
    }
    loginLoading.value = true;
    // 发送登录请求
    let res = await userLogin(data);
    console.log(res)
    loginLoading.value = false;
    if(res.data.meta.status===200){
        showMessage("登录成功",'success');
        // 登录成功讲token存入本地
        localStorage.setItem("LOGIN_STATUS_TOKEN",res.data.data.token);
        // 讲用户名存储到本地
        localStorage.setItem("username",res.data.data.username)
        // 将登录成功后的token存入vuex中
        store.commit("setToken",res.data.data.token)
        // 登录成功跳转到首页
        router.push({
            path:'/'
        })
        return
    }
    showMessage(res.data.meta.msg,"error")
}
</script>
<style scoped>
.login {
    width: 100%;
    height: 100vh;
    background: #2d3a4b;
    overflow: hidden
}

.content {
    width: 350px;
    margin: 150px auto;
    text-align: center;
}

h3 {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
}
.content>div{
    margin-top: 17px;
}
</style>