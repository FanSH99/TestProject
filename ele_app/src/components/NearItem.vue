<template>
  <div class="nearItem" @click="goGoodsInfo(nearItem.id)">
    <div class="thumb">
      <img :src="nearItem.image_path | getItem" alt="" class="nearImg" />
    </div>
    <div class="nearMain">
      <div class="title van-ellipsis">
        <div class="brand van-ellipsis">
          <span> <van-tag type="primary">品牌</van-tag></span>
          <span>{{ nearItem.name }}</span>
        </div>
        <div class="icon">
          <span v-for="(item, index) in nearItem.supports" :key="index">
            {{ item.icon_name }}
          </span>
        </div>
      </div>
      <div class="middle">
        <div class="left">
          <van-rate
            v-model="nearItem.rating"
            allow-half
            void-icon="star"
            void-color="#eee"
            color="#ffd21e"
            readonly
            gutter="1px"
            size="14px"
            class="star"
          />
          <span class="rate">{{ nearItem.rating }}</span>
          <span>月销{{ nearItem.recent_order_num }}单</span>
        </div>
        <div class="right">
          <van-tag size="medium" type="primary">{{
            nearItem.delivery_mode.text
          }}</van-tag>
          <van-tag size="medium" plain type="primary">准时达</van-tag>
        </div>
      </div>
      <div class="bottom">
        <span
          >￥{{ nearItem.float_minimum_order_amount }}起送 / 配送费约￥{{
            nearItem.float_delivery_fee
          }}</span
        >
        <span>{{ nearItem.distance }} / {{ nearItem.order_lead_time }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["nearItem"],
  data() {
    return {
      value: "",
    };
  },
  methods: {
    goGoodsInfo(id) {
      console.log(id);
      this.$router.push({
        path: "/shop/info/" + id,
      });
    },
  },
  filters: {
    getItem(text) {
      return "https://elm.cangdu.org/img/" + text;
    },
  },
};
</script>
<style lang="less" scoped>
.nearItem {
  background: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
@w: 17%;
.thumb {
  width: 17%;
  height: @w;
  overflow: hidden;
}
img {
  width: 100%;
}
.nearMain {
  width: 82%;
  display: flex;
  flex-direction: column;
  color: #666;
  font-size: 13px;
  .title {
    font-weight: 700;
    color: #000;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    // span {
    //   margin-right: 3px;
    // }
    .brand {
      width: 80%;
      span {
        margin-right: 5px;
      }
    }
    .icon {
      width: 18%;
      float: right;
      span {
        display: inline-block;
        padding: 1px;
        font-size: 12px;
        color: #666;
        font-weight: normal;
        border: 1px solid #e4e4e4;
        margin-left: 2px;
      }
    }
  }
  .middle {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    .left {
      width: 60%;
      font-size: 12px;
      .rate {
        color: #ff6000;
        font-size: 14px;
        margin: 0 5px;
      }
    }

    .right {
      width: 39%;
      text-align: right;
      font-size: 14px;
      span:first-child {
        margin-right: 5px;
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: space-between;
  }
}
</style>