<template>
  <div class="rank">
    <div class="title">
      <van-cell icon="fire-o" title="商品排行榜" is-link value="更多" />
    </div>
    <div class="rankMain">
      <van-card
        :price="item.price"
        :title="item.storeName"
        :thumb="item.image"
        v-for="(item, index) in rank"
        :key="index"
        v-show="index < 3"
        @click="goInfo(item.id)"
        class="name"
      >
        <template #price>
          <span class="price">￥{{ item.price }}</span>
        </template>
        <template #bottom>
          <span class="sale">销量{{ item.sales }}件</span>
        </template>
      </van-card>
    </div>
  </div>
</template>
<script>
import { getGoodsRank } from "@/api/home";
export default {
  name: "",
  data() {
    return {
      rank: null,
    };
  },
  async created() {
    let goodsRank = await getGoodsRank();
    this.rank = goodsRank.data.data;
    // console.log(this.rank);
  },
  methods: {
    goInfo(id) {
      this.$router.push({
        path: "/info/" + id,
      });
    },
  },
};
</script>
<style lang="less" scoped>
.rank {
  margin: 10px;
  background: #fff;
}
.title {
  font-size: 17px;
  .van-cell__left-icon {
    color: rgb(238, 10, 36);
  }
  .van-cell__title {
    font-size: 17px;
  }
}
.name {
  font-size: 14px;
}
.price {
  font-size: 18px;
  color: #ff0000;
}
.sale {
  margin-left: 10px;
  // font-size: 14px;
  color: #999;
}
</style>