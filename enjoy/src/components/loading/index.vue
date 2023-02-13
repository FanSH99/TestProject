<template>
  <div class="isLoading">
    <van-popup v-model="isLoading">
      <van-loading size="24px" vertical>加载中...</van-loading>
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      isLoading: true,
    };
  },
};
</script>
<style lang="less" scoped>
.van-popup {
  padding: 15px;
  border-radius: 5px;
}
</style>