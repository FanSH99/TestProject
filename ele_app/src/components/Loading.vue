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
.loadingState {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
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