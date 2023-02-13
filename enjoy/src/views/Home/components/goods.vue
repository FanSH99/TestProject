<template>
  <div class="goods">
    <div class="nav">
      <div
        class="navitem"
        v-for="(item, index) in navItem"
        :key="index"
        :class="{ active: index == active }"
        @click="changeNav(index)"
      >
        <p class="title">{{ item.title }}</p>
        <p class="small">{{ item.small }}</p>
      </div>
    </div>
    <div class="goodsmain" v-if="goodsList">
      <goods-item
        :item="item"
        v-for="(item, index) in goodsList.list"
        :key="index"
        class="item"
      ></goods-item>
    </div>
    <div class="tig">没有更多了</div>
  </div>
</template>
<script>
import { getgoods } from "@/api/home";
import GoodsItem from "@/components/goodsItem/index.vue";
export default {
  name: "",
  data() {
    return {
      active: 0,
      navItem: [
        {
          title: "精品推荐",
          small: "多买多省",
        },
        {
          title: "热门榜单",
          small: "热门榜单",
        },
        {
          title: "首发单品",
          small: "CRMEB",
        },
        {
          title: "促销单品",
          small: "新品首发",
        },
      ],
      goodsList: null,
    };
  },
  methods: {
    changeNav(index) {
      this.active = index;
      this.getList();
    },
    async getList() {
      let goods = await getgoods(this.active + 1);
      console.log(goods);
      this.goodsList = goods.data.data;
      console.log(this.goodsList);
    },
  },
  created() {
    this.getList();
  },
  components: { GoodsItem },
};
</script>
<style lang="less" scoped>
.goods {
  padding: 0 10px;
}
.nav {
  width: 100%;

  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  .navitem {
    text-align: center;
    cursor: pointer;
  }
  .title {
    font-size: 14px;
    width: 100%;
    color:#444;
  }
  .small {
    font-size: 13px;
    color: #a5a5a5;
    border-radius: 8px;
    margin-top: 5px;
    width: 100%;
  }
  .navitem.active .title{
    color: #e93323;
  }
  .navitem.active .small {
    color: #fff;
    background: #e93323;
  }
}
.goodsmain {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  .item {
    width: 48%;
  }
}
.tig {
  width: 100%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  color: #969799;
}
</style>