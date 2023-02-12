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
        <div>我的</div>
      </template>
    </my-nav-bar>
    <div class="header">
      <div class="header_content">
        <div class="header_photo">
          <img src="../../assets/logo.png" alt="" v-if="!userInfo" />
          <img :src="'https://elm.cangdu.org/img/' + userInfo.avatar" alt="" v-else />
        </div>
        <div class="msg">
          <p class="login" v-if="!userInfo" @click="$router.push('/login')">
            登录/注册
          </p>
          <p class="login" v-else>{{ userInfo.username }}</p>
          <p class="phone">
            <van-icon name="phone"></van-icon>
            <span v-if="userInfo">{{
            userInfo.mobile ? userInfo.mobile : "暂无绑定手机号"
            }}</span>
          </p>
        </div>
      </div>
      <div style="line-height: 60px">
        <van-icon name="arrow" @click="$router.push('/user/info')"></van-icon>
      </div>
    </div>
    <div class="active">
      <div>
        <p class="num">
          <span style="color: #f90">0.00</span>
          元
        </p>
        <p class="title">我的余额</p>
      </div>
      <div>
        <p class="num"><span style="color: #ff5f3e">0</span> 个</p>
        <p class="title">我的优惠</p>
      </div>
      <div style="border: none">
        <p class="num"><span style="color: #6ac20b">0</span> 分</p>
        <p class="title">我的积分</p>
      </div>
    </div>
    <div style="margin-top: 10px">
      <van-cell title="我的订单" icon="balance-list-o" is-link />
      <van-cell title="积分商城" icon="goods-collect-o" is-link />
      <van-cell title="饿了么会员卡" icon="fire-o" is-link />
    </div>
    <div style="margin-top: 10px">
      <van-cell title="服务中心" icon="phone-circle-o" is-link />
      <van-cell title="下载饿了么app" icon="location-o" is-link />
      <van-cell icon="user-o" is-link>
        <template #title>
          <a href="tel:15518835995">联系客服</a>
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
import { getUserProFile } from '@/api/user';
export default {
  data() {
    return {
      userInfo: null,
    };
  },
  async created(){
     let res = await getUserProFile({user_id:this.$store.state.user_id});
     console.log(res)
     if(res.data.status ==0){
       this.userInfo = null;
       return
     }
     this.userInfo = res.data
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  padding: 10px;
  background: #3190e8;
  color: #fff;
  border-top: 1px solid #fff;
  display: flex;
  justify-content: space-between;

  .header_content {
    display: flex;

    .header_photo {
      width: 60px;
      height: 60px;
      background: #f1f1f1;
      border-radius: 50%;

      img {
        width: 60px;
        height: 60px;
        display: block;
        border-radius: 50%;
      }
    }

    .msg {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .login {
        font-size: 20px;
        font-weight: bolder;
      }

      .phone {
        font-size: 13px;

        span {
          margin-left: 5px;
        }
      }
    }
  }
}

.active {
  display: flex;
  background: #fff;
  padding: 20px 10px;

  div {
    width: calc(100vh / 3);
    border-right: 1px solid #e4e4e4;
    text-align: center;
  }

  .title {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
  }

  .num {
    font-size: 14px;

    span {
      font-size: 25px;
      font-weight: bold;
    }
  }
}
</style>