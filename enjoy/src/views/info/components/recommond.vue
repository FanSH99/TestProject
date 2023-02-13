<template>
  <div class="recommond" id="recommond">
    <div class="recommondMain">
      <p class="title">优品推荐</p>
      <div class="slider">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, index) in this.goodsList" :key="index">
            <div class="list" v-for="(list, idx) in item" :key="idx">
              <img v-lazy="list.image" alt="" />
              <p class="van-ellipsis">{{ list.storeName }}</p>
              <p class="van-ellipsis price">{{ list.price }}</p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script>
import { getRecommond } from "@/api/info";
export default {
  name: "",
  data() {
    return {
      goods: null,
      goodsList: [],
    };
  },
  async created() {
    let recommond = await getRecommond();
    this.goods = recommond.data.data;
    // console.log(this.goods);
    let num = Math.ceil(this.goods.limit / 6);
    // console.log(num);
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr = this.goods.list.splice(0, 6);
      this.goodsList.push(arr);
    }
    // console.log(this.goodsList);
  },
};
</script>
<style lang="less" scoped>
.recommond {
  padding: 10px 10px 0;
}
.recommondMain {
  padding: 10px;
  border-radius: 5px;
  background: #fff;
  .title {
    color: #b4b4b4;
    text-align: center;
    font-size: 14px;
  }
  .slider {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .van-swipe-item {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .list {
        width: 30%;
        overflow: hidden;
        p {
          margin: 5px 0;
          font-size: 14px;
        }
        img {
          width: 100%;
        }
        .price {
          color: #ff7600;
          font-size: 15px;
        }
      }
    }
  }
}
</style>