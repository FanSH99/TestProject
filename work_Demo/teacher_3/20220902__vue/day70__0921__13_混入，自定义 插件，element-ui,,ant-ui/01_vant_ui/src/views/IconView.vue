<template>
  <div>
    <div>
      <van-grid>
        <van-grid-item icon="arrow" text="arrow" />
        <van-grid-item icon="arrow-left" text="arrow-left" />
        <van-grid-item icon="arrow-up" text="arrow-up" />
        <van-grid-item icon="arrow-down" text="arrow-down" />
        <van-grid-item icon="success" text="success" />
        <van-grid-item icon="plus" text="plus" />
        <van-grid-item icon="fail" text="fail" />
        <van-grid-item icon="minus" text="minus" />
        <van-grid-item icon="cross" text="cross" />
        <van-grid-item icon="circle" text="circle" />
        <van-grid-item icon="chat-o" text="chat-o" />
        <van-grid-item icon="photo-o" text="文字">
          <template #icon>
            <van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />
          </template>
        </van-grid-item>
        <van-grid-item icon=" location-o" text=" location-o" />
        <van-grid-item icon="like-o" text="like-o" />
        <van-grid-item icon="star-o" text="star-o" />
        <van-grid-item icon="phone-o" text="phone-o" />
        <van-grid-item icon="setting-o" text="setting-o" />
        <van-grid-item icon="fire-o" text="fire-o" />
        <van-grid-item icon="coupon-o " text="coupon-o " />
        <van-grid-item icon="cart-o " text="cart-o" />
        <van-grid-item icon="shopping-cart-o " text="shopping-cart-o" />
        <van-grid-item icon="cart-circle-o " text="cart-circle-o " />
        <van-grid-item icon="friends-o " text="friends-o" />
        <van-grid-item icon="comment-o" text="comment-o" />
        <van-grid-item icon="gem-o" text="gem-o" />
        <van-grid-item icon="gift-o" text="gift-o" />
        <van-grid-item icon="point-gift-o" text="point-gift-o" />
        <van-grid-item icon="send-gift-o" text="send-gift-o" />
        <van-grid-item icon="service-o" text="service-o" />
        <van-grid-item icon="bag-o" text="bag-o" />
        <van-grid-item
          v-for="(item, index) in list"
          :key="index"
          :icon="item"
          :text="item"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "todo-list-o",
        "balance-list-o",
        "close",
        "clock-o",
        "question-o",
        "passed",
        "add-o",
        "gold-coin-o",
        "info-o",
        "play-circle-o",
        "pause-circle-o",
        "stop-circle-o",
        "warning-o",
        "phone-circle-o",
        "music-o",
        "smile-o",
        "thumb-circle-o",
        "comment-circle-o",
        "browsing-history-o",
        "underway-o",
        "more-o",
        "video-o",
        "shop-o",
      ],
    };
  },
};
</script>

<style>
</style>