<template>
  <div class="login">
    <div class="content">
      <h3>用户登录</h3>
      <div>
        <el-input v-model="username" placeholder="请输入用户名" :prefix-icon="User"></el-input>
      </div>
      <div>
        <el-input v-model="password" type="password" clearable placeholder="请输入密码" :prefix-icon="Lock"></el-input>
      </div>
      <div>
        <el-button type="primary" @click="login" :loading="loginLoading">{{loginLoading?'登录中...':"登录"}}</el-button>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from 'vue';

import { userLogin } from '../../api/login';

import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import { showMessage } from '../../utils/showMessage';
let username = ref("");
let password = ref("");

let store = useStore();
let router = useRouter();

let loginLoading = ref(false);

let login = async () => {
  if (!username.value || !password.value) {
    showMessage("请你补充完整信息！", "warning");
    return;
  }
  let data: LoginParams = {
    username: username.value,
    password: password.value,
  }
  loginLoading.value = true;
  let res = await userLogin(data);
  console.log(res);
  loginLoading.value = false;
  if (res.data.meta.status === 200) {
    showMessage("登录成功", "success");
    localStorage.setItem("LOGIN_STATE_TOKEN", res.data.data.token);
    localStorage.setItem("USERNAME", res.data.data.username)
    store.commit("setToken", res.data.data.token)
    // 登录成功跳转到首页
    router.push({
      path: '/'
    })
    return
  }
  showMessage(res.data.meta.msg, "error")
}

</script>
<style>
.login {
  width: 100%;
  height: 100vh;
  background: #2d3a4b;
  overflow: hidden;
}

.content {
  width: 320px;
  margin: 100px auto;
  text-align: center;
}

h3 {
  color: #fff;
  text-align: center;
  font-size: 20px;
}

.content > div {
  margin: 20px 0;
}
</style>