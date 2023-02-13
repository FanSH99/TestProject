<template>
  <div class="skeleton">
    <div class="loadingState">
      <div class="state">
        <div>
          <van-loading />
        </div>
        <span>正在加载中</span>
      </div>
    </div>
    <div class="skTop">
      <van-skeleton
        title
        avatar
        :row="3"
        avatar-size="70px"
        avatar-shape="square"
      />
    </div>
    <div class="skmiddle">
      <van-skeleton :row="1" row-width="100vm" />
    </div>
    <div class="skBottom">
      <div class="sk_left">
        <div class="sk_lmain">
          <van-skeleton :row="3" />
        </div>
        <div class="sk_lmain">
          <van-skeleton :row="2" />
        </div>
        <div class="sk_lmain">
          <van-skeleton :row="3" />
        </div>
        <div class="sk_lmain">
          <van-skeleton :row="4" />
        </div>
      </div>
      <div class="sk_right">
        <div class="sk_rmain" v-for="(item, index) in 4" :key="index">
          <van-skeleton
            title
            avatar
            :row="2"
            avatar-size="60px"
            avatar-shape="square"
          />
        </div>
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
};
</script>
<style lang="less" scoped>
.skTop {
  padding: 10px;
}
.skmiddle {
  background: #fff;
  margin: 20px 0;
  div {
    height: 40px;
  }
}
.skBottom {
  display: flex;
  justify-content: space-between;
  .sk_left {
    width: 30%;
    background:#e4e4e4;
    .sk_lmain {
      margin: 20px 0;
    }
  }
  .sk_right {
    background: #fff;
    width: 70%;
    .sk_rmain {
      margin: 20px 0;
    }
  }
}
.loadingState {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background: rgba(0, 0, 0, 0.1);
  .state {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background: #f1f1f1;
    text-align: center;
    div {
      width: 100px;
      height: 60px;
      line-height: 80px;
      text-align: center;
    }
  }
}
</style>