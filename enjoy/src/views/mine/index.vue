<template>
  <div class="mine page">
    <div class="bg">
      <div class="userInfo" v-if="userInfo">
        <div class="left">
          <img
            :src="header"
            alt=""
            @click="goUser()"
          />
          
        </div>
        <div class="right">
          <p class="nickname">{{ userInfo.nickname }}</p>
          <p>{{ userInfo.phone }}</p>
        </div>
      </div>
      <div class="content" v-if="userInfo">
        <div>
          <p class="text">{{ userInfo.nowMoney }}</p>
          <p>余额</p>
        </div>
        <div>
          <p class="text">{{ userInfo.experience }}</p>
          <p>积分</p>
        </div>
        <div>
          <p class="text">{{ userInfo.couponCount }}</p>
          <p>优惠券</p>
        </div>
        <div>
          <p class="text">{{ userInfo.collectCount }}</p>
          <p>收藏</p>
        </div>
      </div>
      <div class="order">
        <p class="title">
          <span class="name">订单中心</span
          ><span class="more"
            >查看全部<van-icon name="arrow" color="#b4b4b4"
          /></span>
        </p>
        <div class="orderInfo">
          <div v-for="(item, index) in orderList" :key="index">
            <van-icon :name="item.icon" size="30px" color="#1db0fc" />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getUser } from "@/api/mine";
export default {
  name: "",
  data() {
    return {
      userInfo: null,
      header: "",
      orderList: [
        {
          icon: "todo-list",
          name: "待付款",
          color: "",
        },
        {
          icon: "balance-list",
          name: "待发货",
          color: "",
        },
        {
          icon: "clock",
          name: "待收货",
          color: "",
        },
        {
          icon: "thumb-circle",
          name: "待评价",
          color: "",
        },
        {
          icon: "question",
          name: "退款/售后",
          color: "",
        },
      ],
    };
  },
  methods: {
    goUser() {
      this.$router.push({
        path: "/user",
      });
    },
  },
  async created() {
    let user = await getUser();
    // console.log(user);
    this.userInfo = user.data.data;
    this.header = localStorage.getItem("header");
    console.log(this.userInfo);
  },
};
</script>
<style lang="less" scoped>
.bg {
  width: 100%;
  height: 250px;
  background: -webkit-linear-gradient(270deg, #1db0fc, #f5f5f5);
  position: relative;
}
.userInfo {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.left {
  width: 20%;
}
.right {
  width: 79%;
  p {
    margin: 8px;
    color: #fff;
  }
  .nickname {
    font-size: 23px;
    font-weight: 700;
  }
}
img {
  width: 100%;
  border-radius: 50%;
}
.content {
  margin: 10px 30px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  p {
    // margin: 10px 0;
    color: #fff;
    font-size: 13px;
  }
  .text {
    font-weight: 700;
    font-size: 23px;
    margin-bottom: 10px;
  }
}
.order {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 90%;
  height: auto;
  padding: 0 20px;
  background: #fff;
  border-radius: 10px;
  .title {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    .name {
      font-weight: 700;
      font-size: 20px;
    }
    .more {
      font-size: 13px;
      color: #b4b4b4;
    }
  }

  .orderInfo {
    margin: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    color: #444;
    text-align: center;
    p {
      margin-top: 5px;
    }
  }
}
</style>