<template>
  <div class="mine">
    <div class="top">
      <div class="left">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="right">
        <div>
          <h2><span @click="goLogin">登录/注册</span></h2>
          <van-icon name="phone-o" />
        </div>
        <div class="arrow">
          <van-icon name="arrow" @click="goLogin" />
        </div>
      </div>
    </div>
    <div class="center">
      <div class="money">
        <p><span>0.00</span>元</p>
        <p class="text">我的余额</p>
      </div>
      <div class="free">
        <p><span>0</span>个</p>
        <p class="text">我的优惠</p>
      </div>
      <div class="points">
        <p><span>0</span>分</p>
        <p class="text">我的积分</p>
      </div>
    </div>
    <div class="message">
      <div>
        <van-cell title="我的订单" icon="balance-list-o" is-link />
        <van-cell title="积份商城" icon="goods-collect-o" is-link />
        <van-cell title="饿了么会员" icon="fire-o" is-link />
      </div>
      <div>
        <van-cell title="服务中心" icon="phone-circle-o" is-link />
        <van-cell title="下载饿了么app" icon="location-o" is-link />
        <van-cell title="联系客服" icon="user-o" class="user" is-link />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    goLogin() {
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>
<style lang="less" scoped>
.top {
  border-top: 1px solid #fff;
  height: 100px;
  width: 100%;
  background: #3190e8;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  position: relative;
  .left {
    width: 17vw;
    height: 17vw;
    background: #fff;
    border-radius: 100%;
    img {
      width: 100%;
      border-radius: 100%;
    }
  }
  .right {
    width: 75%;
    color: #fff;
    h2 {
      margin: 10px 0;
      font-size: 20px;
    }
    .arrow {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      color: #fff;
    }
  }
}
.text {
  color: #666;
  font-size: 14px;
}
.center {
  display: flex;
  justify-content: space-between;
  text-align: center;
  background: #fff;
  padding: 18px 0;
  div {
    width: 33.3%;
    border-right: 1px solid #e4e4e4;
    p {
      margin: 6px 0;
      span {
        font-size: 24px;
      }
    }
  }
  .money {
    span {
      color: #ff9000;
    }
  }
  .free {
    span {
      color: #ff5e3e;
    }
  }
  .points {
    span {
      color: #6ac20b;
    }
  }
}
.message > div {
  margin: 10px 0;
  .user {
    span {
      color: #0000ee;
    }
  }
}
</style>