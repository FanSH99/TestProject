<template>
  <div class="page">
    <my-nav-bar>
      <!-- 具名插槽 -->
      <template #left>
        <div class="lefts">
          <van-icon name="arrow-left" @click="$router.go(-1)"></van-icon>
        </div>
      </template>
      <template #center>
        <div>密码登录</div>
      </template>
    </my-nav-bar>
    <div class="login">
      <div class="username">
        <input type="text" v-model="username" placeholder="账号" />
      </div>
      <div class="password">
        <input
          :type="isShowPas ? 'text' : 'password'"
          v-model="password"
          placeholder="密码"
        />
        <van-switch v-model="isShowPas" size="20px" />
      </div>
      <div class="code">
        <input type="text" v-model="code" placeholder="验证码" />
        <img :src="codeUrl" alt="" />
        <div class="title">
          <div>看不清</div>
          <div style="color: #3190e8" @click="getcode">换一张</div>
        </div>
      </div>
    </div>
    <div class="tip_msg">
      <p>温馨提示：未注册过的账号，登录时将自动注册</p>
      <p>注册过的用户可凭账号密码登录</p>
    </div>
    <div class="btn">
      <van-button type="primary" block @click="Login">登录</van-button>
    </div>
    <div class="reset">重置密码?</div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { getCode,userLogin} from "@/api/login";
export default {
  data() {
    return {
      username: "",
      password: "",
      isShowPas: false,
      code: "",
      codeUrl: "",
    };
  },
  async created() {
    this.getcode();
  },
  methods: {
    async getcode() {
      let res = await getCode();
      this.codeUrl = res.data.code;
    },
    async Login(){
      console.log(123456)
        if(!this.username || !this.password){
            Toast.fail("请您补充完整信息！")
            return
        }
        let data = {
            username:this.username,
            password:this.password,
            captcha_code:this.code
        }
        let res = await userLogin(data);
        console.log(res)
        if(res.data.status == 0){
            Toast.fail(res.data.message)
            return
        }
        this.$store.commit("loginUserId",res.data.user_id);
        this.$router.go(-1)
    }
  },
};
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  background: #fff;
  padding: 10px 0;
  margin: 15px 0;

  .username {
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #f1f1f1;

    input {
      width: 100%;
      border: none;
      outline: none;
      padding: 0 5px;
      font-size: 14px;
    }
  }

  .password {
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    justify-content: space-between;

    input {
      width: 80%;
      border: none;
      outline: none;
      padding: 0 5px;
      font-size: 14px;
    }
  }

  .code {
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;

    input {
      width: 60%;
      border: none;
      outline: none;
      padding: 0 5px;
      font-size: 14px;
    }

    img {
      width: 75px;
    }

    .title {
      font-size: 13px;
      color: #666;
    }
  }
}

.tip_msg {
  padding: 0 10px;
  font-size: 13px;
  color: red;

  p {
    margin: 10px 0;
  }
}

.btn {
  width: 95%;
  margin: 5px auto;
}

.reset {
  padding: 10px;
  text-align: right;
  color: #3b95e9;
  font-size: 13px;
}
</style>