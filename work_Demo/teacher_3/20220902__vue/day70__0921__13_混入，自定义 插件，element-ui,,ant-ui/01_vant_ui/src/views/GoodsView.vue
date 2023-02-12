<template>
  <div>
    <div>
      <p>基础商品列表</p>
      <van-goods-action>
        <van-goods-action-icon
          icon="chat-o"
          text="客服"
          color="#ff9999"
          dot
          @click="onClickIcon"
        />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          color="red"
          badge="29"
          @click="onClickIcon"
        />
        <van-goods-action-icon
          icon="shop-o"
          text="店铺"
          badge="12"
          @click="onClickIcon"
        />
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          color="#7232dd"
        />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="onClickButton"
        />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    },
  },
};
</script>
<style>
</style>