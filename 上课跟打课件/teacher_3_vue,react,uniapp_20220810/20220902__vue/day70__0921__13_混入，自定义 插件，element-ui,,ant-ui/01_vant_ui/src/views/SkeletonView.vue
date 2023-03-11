<template>
  <div>
    <div>
      <van-skeleton title :row="3" />
      <p></p>
      <van-skeleton title avatar :row="4" title-width="30%" />
      <p></p>
      <van-skeleton
        title
        avatar
        round
        avatar-size="54px"
        avatar-shape="square"
        :row="3"
      />
    </div>
    <div>
      <p>基础骨架屏</p>
      <van-skeleton title :row="3" />
    </div>
    <div>
      <p>显示头像骨架屏</p>
      <van-skeleton title avatar :row="3" />
    </div>
    <div>
      <van-skeleton title avatar :row="3" :loading="loading">
        <div>实际内容</div>
      </van-skeleton>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
  },
};
</script>
<style>
</style>