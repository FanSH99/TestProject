<template>
  <div class="page login">
    <top>
      <template #left>
        <span @click="$router.go(-1)">
          <van-icon name="arrow-left" size="20px" />
        </span>
      </template>
      <template #center>
        <span>密码登录</span>
      </template>
    </top>
    <div class="loginMain">
      <van-form @submit="onSubmit">
        <div class="message">
          <van-field
            v-model="username"
            name="username"
            placeholder="账号"
            :rules="[{ required: true, message: '请填写账号' }]"
          />

          <van-field
            v-model="password"
            type="password"
            name="password"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          >
          </van-field>
          <van-field
            v-model="check"
            type="text"
            name="check"
            placeholder="验证码"
            :rules="[{ required: true, message: '请填写验证码' }]"
          >
          </van-field>
        </div>
        <div style="margin: 10px">
          <van-button block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      username: "",
      password: "",
      check: "",
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>
<style lang="less" scoped>
.login {
  background: #f1f1f1;
  .loginMain {
    padding: 20px 0;

    .message {
      background: #fff;
    }
  }
}
</style>