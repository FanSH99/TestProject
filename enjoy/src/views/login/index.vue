<template>
  <div class="login">
    <div class="icon">
      <van-icon
        name="cross"
        @click="$router.go(-1)"
        size="18"
        color="#b4b4b4"
      />
    </div>
    <div class="loginMain">
      <p class="title">短信登录</p>
      <van-form @submit="onSubmit">
        <div>
          <van-cell-group>
            <van-field
              v-model="phone"
              clearable
              type="tel"
              placeholder="请输入手机号"
              :error="isErrorPhone"
              :error-message="message"
              @blur="check"
            />
          </van-cell-group>
          <van-field
            v-model="sms"
            clearable
            placeholder="请输入短信验证码"
            :error="isErrorSms"
            @blur="check"
          >
            <template #button>
              <van-button
                size="small"
                :disabled="disabled"
                type="primary"
                @click="getSms()"
                >{{ tig }}</van-button
              >
            </template>
          </van-field>
        </div>
        <div class="btn">
          <van-button block type="warning">登录</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
import { getSms, getLogin } from "@/api/login";
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      phone: "",
      sms: "",
      isErrorPhone: false,
      isErrorSms: false,
      isSuccess: false,
      tig: "发送验证码",
      disabled: false,
      message: "",
      LoginMsg: "",
      token: "",
      timer: null,
      num: "",
    };
  },
  beforeDestroy() {
    this.timer = null;
    clearInterval(this.timer);
  },
  methods: {
    async onSubmit() {
      if (this.phone == "" || this.sms == "") {
        Toast("请你补充完整信息");
        return;
      }
      console.log(this.phone, this.sms);
      let obj = {
        phone: this.phone,
        captcha: this.sms,
      };
      let getloginMsg = await getLogin(obj);
      this.LoginMsg = getloginMsg.data.data;
      // console.log(getloginMsg);
      console.log(this.LoginMsg);
      // this.token = this.LoginMsg.token;
      // console.log(this.token);
      if (getloginMsg.data.code != 200) {
        Toast(getloginMsg.data.message);
        return;
      }
      localStorage.setItem("token", this.LoginMsg.token);
      localStorage.setItem("user", this.LoginMsg.uid);
      // this.$router.push({
      //   path: "/mine",
      // });
      this.$router.go(-1);
    },
    check() {
      if (this.phone == "") {
        this.isErrorPhone = true;
        this.message = "手机号不能为空";
      } else if (this.phone.length != 11) {
        this.isErrorPhone = true;
        this.message = "手机号格式错误";
      } else {
        this.isErrorPhone = false;
        this.message = "";
      }
      this.sms == "" ? (this.isErrorSms = true) : (this.isErrorSms = false);
    },
    async getSms() {
      if (this.phone == "") {
        Toast("请你输入手机号");
      } else {
        this.isErrorSms = true;
        // console.log(this.phone);
        let sms = await getSms(`phone=${this.phone}`);
        console.log(sms);
        Toast(sms.data.message);
        if (sms.data.code != 200) {
          this.message = sms.data.message;
          this.isErrorPhone = true;
          return;
        }
        Toast(sms.data.message);
        this.isSuccess = true;
        this.num = 6;
        // let timer = null;
        if (this.timer || this.num == "") {
          return false;
        }
        this.timer = setInterval(() => {
          this.num--;
          if (this.num <= 0) {
            // num = 6;
            this.disabled = false;
            this.tig = "再次发送验证码";
            this.timer = null;
            clearInterval(this.timer);
            this.isErrorSms = false;
            this.num = "";
            return;
          }
          this.disabled = true;
          this.tig = `${this.num}秒后再次发送`;
        }, 1000);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.icon {
  position: fixed;
  top: 30px;
  left: 20px;
}
.loginMain {
  margin: 100px 20px;
  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
}
.van-cell-group {
  border-bottom: 1px solid #f1f1f1;
}
.btn {
  margin-top: 10px;
}
</style>