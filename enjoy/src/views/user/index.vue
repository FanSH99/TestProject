<template>
  <div class="user">
    <div class="userMain">
      <div class="icon" @click="$router.go(-1)">
        <van-icon name="arrow-left" color="#1989fa" />
      </div>
      <p class="title">用户信息</p>
      <div class="info" v-if="userInfo">
        <p @click="selectImg()">
          <span>头像</span>
          <span>
            <img :src="header" alt="" />
          </span>
        </p>
        <p>
          <span>昵称</span><span class="text" @click="changeName">{{ userInfo.nickname }}</span>
        </p>
        <p>
          <span>手机号码</span><span class="text">{{ userInfo.phone }}</span>
        </p>
        <p>
          <span>ID号</span><span class="text">{{ id }}<van-icon name="bag-o" /></span>
        </p>
      </div>
    </div>
    <div class="btn">
      <van-button block round type="info" @click="saveChange()">保存修改</van-button>
    </div>
    <div class="btn">
      <p>退出登录</p>
    </div>
    <div class="btn">
      <input type="file" name="" id="" ref="myheader" @change="changeImg" style="display: none" />
    </div>
  </div>
</template>
<script>
import { getUser, uploadHeader } from "@/api/mine";
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      userInfo: null,
      id: "",
      header: "",
      isSave: "",
    };
  },
  async created() {
    this.id = localStorage.getItem("user");
    let user = await getUser();
    // console.log(user);
    this.userInfo = user.data.data;
    this.header = localStorage.getItem("header");
    console.log(this.header);
  },
  methods: {
    selectImg() {
      console.log(this.$refs.myheader);
      this.$refs.myheader.click();
    },
    changeName() { },
    async changeImg(e) {
      console.log("我改变了");
      /* 如果e打不出来，吧@change()后面的括号去掉，只写@change即可 */
      console.log(e.target.files);
      let file = e.target.files[0];
      console.log(file);
      let data = new FormData();
      data.append("multipart", file);
      let res = await uploadHeader(data);
      console.log(res.data, res.data.message);
      if (res.data.message == "操作成功") {
        Toast.success(res.data.message);
        // let header = res.data.data.url;
        this.header = res.data.data.url;
      } else {
        Toast("操作失败");
      }
    },
    async saveChange() {
      // console.log(111);
      localStorage.setItem("header", this.header);
      // console.log(this.header);
      this.header = localStorage.getItem("header");
      // console.log(this.header);
    },
  },
};
</script>
<style lang="less" scoped>
.user {
  background: #f1f1f1;
  height: 100vh;

  .userMain {
    background: #fff;
    position: relative;

    .icon {
      position: absolute;
      top: 15px;
      left: 20px;
    }

    p {
      width: 100%;
      height: 46px;
      line-height: 46px;
    }

    .title {
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #e4e4e4;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }
}

.info,
.btn {
  padding: 0 16px;
}

.info>p {
  font-size: 14px;
  color: #323233;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f9f9f9;

  .text {
    color: #b4b4b4;
  }
}

.btn {
  margin: 20px 0;

  p {
    text-align: center;
    font-size: 14px;
  }
}
</style>