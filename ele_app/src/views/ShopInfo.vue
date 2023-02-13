<template>
  <div class="shopInfo">
    <div v-if="loading">
      <img src="../assets/info.40f8ade5.svg" alt="" />
    </div>
    <div v-else>
      <div class="topBanner">
        <div class="bg" :style="style"></div>
        <div class="bannerMain">
          <div class="left">
            <img
              :src="bannerInfo.image_path | getItem"
              alt=""
              class="nearImg"
            />
          </div>
          <div class="right">
            <div>
              <h2>{{ bannerInfo.name }}</h2>
            </div>
            <div class="van-ellipsis">
              商家配送 / 分钟到达 / 配送费￥{{ bannerInfo.float_delivery_fee }}
            </div>
            <div class="van-ellipsis">
              公告：{{ bannerInfo.promotion_info }}
            </div>
          </div>
        </div>
      </div>
      <div class="title">
        <div
          :class="{ active: shop_active === index }"
          v-for="(item, index) in titleList"
          :key="index"
          @click="goShopList(index)"
        >
          {{ item }}
        </div>
      </div>
      <div class="main">
        <div v-if="shop_active == 0">
          <shop-list-info :shopList="shopList"></shop-list-info>
        </div>
        <div v-if="shop_active == 1">
          <shop-rate-info :rate="rate"></shop-rate-info>
        </div>
      </div>
      <div class="footer">
        <div class="total">
          <p>
            ￥<span>{{ total }}</span>
          </p>
          <p class="small">配送费<span>5</span>元</p>
          <div class="car">
            <div>
              <van-icon name="shopping-cart-o" color="#fff" size="28px" />
            </div>
          </div>
        </div>
        <div class="tig">
          <span v-if="total == 0">还差￥20起送</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getShopInfo, getShopList, getRate} from "@/api/shop.js";
import shopItemInfo from "@/components/ShopItemInfo.vue";
import mySkeleton from "@/components/Skeleton.vue";
import shopListInfo from "@/components/ShopListInfo.vue";
import shopRateInfo from "@/components/ShopRateInfo.vue";
export default {
  name: "",
  data() {
    return {
      style: {
        background: "",
      },
      bannerInfo: "",
      banner: "",
      shop_active: 0,
      titleList: ["商品", "评价"],
      loading: true,
      shopList: [],
      rateList: [],
      rate: [],
      total: 0,
    };
  },
  components: {
    shopItemInfo,
    mySkeleton,
    shopListInfo,
    shopRateInfo,
  },
  filters: {
    getItem(text) {
      return "https://elm.cangdu.org/img/" + text;
    },
  },
  methods: {
    goShopList(index) {
      this.shop_active = index;
    },
  },
  async activated() {
    let id = this.$route.params.id;
    this.id = id;

    let shopInfo = await getShopInfo(id);
    this.bannerInfo = shopInfo.data;
    // console.log(this.bannerInfo);
    this.banner = "https://elm.cangdu.org/img/" + this.bannerInfo.image_path;
    this.style.background = `url(${this.banner})`;
    let shopList = await getShopList(id);
    this.shopList = shopList.data;
    // console.log(this.shopList);
    if (this.shopList) {
      this.loading = false;
    }
    let rating = await getRate(id);
    console.log(rating);
    this.rate = rating.data;
  },
};
</script>
<style lang="less" scoped>
@w: 70px;
@footer_h: 70px;
.shopInfo {
  width: 100%;
  background: #e4e4e4;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.topBanner {
  width: 100%;
  height: 120px;
  position: relative;
  background: transparent;
  .bg {
    width: 100%;
    height: 120px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    background-size: 100% !important;
    // 设置背景图片模糊
    filter: blur(4px) brightness(90%);
  }
  .bannerMain {
    width: 100%;
    display: flex;
    padding: 10px;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    .left {
      width: @w;
      height: @w;
    }
    .right div {
      width: 270px;
      color: #fff;
      margin-bottom: 10px;
      margin-left: 10px;
      padding-right: 10px;
    }
  }

  img {
    height: 100%;
  }
}
.small{
  font-size:12px;
}
.title {
  display: flex;
  justify-content: space-between;
  height: 55px;
  line-height: 55px;
  background: #fff;
  div {
    width: 50%;
    text-align: center;
    font-size: 15px;
    color: #666;
    position: relative;
    border-bottom: 1px solid #e4e4e4;
    cursor: pointer;
  }
  div.active {
    color: #3190e8;
  }
  div.active::after {
    content: "";
    width: 30px;
    height: 2px;
    background: #3190e8;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.footer {
  width: 100%;
  height: @footer_h;
  background: #3d3d3f;
  position: fixed;
  bottom: 0;
  z-index: 9999;
  display: flex;
  color: #fff;
  justify-content: space-between;
  text-align: center;
  font-size:20px;
  .car {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid #fff;
    top: 0;
    left: 12px;
    transform: translateY(-50%);
    background: #3190e8;
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .total {
    width: 65%;
   p{
    padding:4px 0;
   }
  }
  .tig {
    width: 35%;
    line-height: @footer_h;
  }
}
</style>