<template>
  <div class="about">
    <van-pull-refresh
      v-model="isLoading"
      pulling-text="快松手"
      loosing-text="松手吧大哥"
      loading-text="您可算松手了"
      @refresh="loading"
    >
      <div style="height: 500px">
        <h1>This is an about page</h1>
        <van-tabs v-model="active">
          <van-tab title="标签 1">内容 1</van-tab>
          <van-tab title="标签 2">内容 2</van-tab>
          <van-tab title="标签 3">内容 3</van-tab>
          <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
      </div>
    </van-pull-refresh>
    <van-skeleton title :row="3" :row-width="['100%', '50%', '80%']" avatar />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      active:2
    };
  },
  methods: {
    loading() {
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>
