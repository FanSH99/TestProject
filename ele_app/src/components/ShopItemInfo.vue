<template>
  <div class="rlist">
    <div class="img">
      <img :src="shopInfo.image_path | getImg" alt="" />
      <img src="" alt="" />
    </div>
    <div class="rtigs">
      <div class="foodname van-ellipsis">{{ shopInfo.name }}</div>
      <div class="van-ellipsis">
        月售{{ shopInfo.month_sales }}份 好评率{{ shopInfo.rating | getRate }}
      </div>
      <div class="price">
        <span>￥20</span>
        <div class="num">
          <van-icon
            name="add"
            type="primary"
            size="22px"
            color="#1989fa"
            @click="addNum"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  props: ["shopInfo"],
  data() {
    return {
      num: 0,
    };
  },
  filters: {
    getImg(text) {
      return "https://elm.cangdu.org/img/" + text;
    },
    getRate(text) {
      return text * 20 + "%";
    },
  },
  methods: {
    addNum() {
      this.num++;
      console.log(this.num);
    },
  },
};
</script>
<style lang="less" scoped>
.rlist {
  padding: 10px;
  border-bottom: 1px solid #e4e4e4;
  display: flex;
  .img {
    width: 18vw;
    height: 18vw;
  }
  img {
    width: 100%;
  }
  .rtigs div {
    padding: 0;
    height: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
  }
  .foodname {
    font-size: 17px;
    font-weight: 700;
    color: #000;
  }
  .price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #f60;
    i {
      display: block;
      /* padding: 10px 0; */
    }
  }
}
</style>