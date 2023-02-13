<template>
  <div class="searchPage">
    <van-button
      block
      type="primary"
      v-for="(item, index) in buttonList"
      :key="index"
      >{{ item }}</van-button
    >
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      buttonList: ["拍照", "相册", "预览图片", "系统分享"],
    };
  },
};
</script>
<style lang="less">
.searchPage {
  padding: 10px 0;
  button {
    margin: 10px 0;
  }
}
</style>