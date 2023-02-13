<template>
  <div class="top" v-if="isshow">
    <div class="find">
      <div class="icon">
        <van-icon name="arrow-left" @click="$router.go(-1)" size="18" />
      </div>
      <div class="search">
        <van-search
          v-model="keyword"
          shape="round"
          placeholder="搜索商品"
          background="transparent"
        />
      </div>
    </div>
    <div class="nav">
      <van-tabs v-model="active" color="green">
        <van-tab title="商品" url="#shopInfo"></van-tab>
        <van-tab title="评价" url="#reply"></van-tab>
        <van-tab title="推荐" url="#recommond"></van-tab>
        <van-tab title="详情" url="#info"></van-tab>
        <!-- <van-tab title="商品"></van-tab>
        <van-tab title="评价"></van-tab>
        <van-tab title="推荐"></van-tab>
        <van-tab title="详情"></van-tab> -->
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: ["isshow"],
  data() {
    return {
      active: 0,
      keyword: "",
      isShow: false,
      scrollHeight: "",
    };
  },
};
</script>
<style lang="less" scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  background: #fff;
  z-index: 999;
  .find {
    .icon {
      position: absolute;
      left: 10px;
      top: 15px;
    }
    .search {
      position: absolute;
      top: 0px;
      left: 50%;
      width: 70%;
      transform: translateX(-50%);
    }
  }
  .nav {
    width: 100%;
    margin-top: 40px;
    .van-tabs__wrap {
      width: 100%;
    }
    .van-tab {
      width: 25%;
    }
  }
}
</style>