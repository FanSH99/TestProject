<template>
  <div class="shopMain">
    <div class="shopList" v-if="shopList.length > 0">
      <div class="lnav">
        <div
          v-for="(item, index) in shopList"
          :key="index"
          :class="{ active: activeId == index }"
          @click="activeId = index"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="rmain">
        <div class="rtitle">
          <span class="text">{{ shopList[activeId].name }}</span>
          <span>{{ shopList[activeId].description }}</span>
        </div>
        <shop-item-info
          v-for="(item, index) in shopList[activeId].foods"
          :key="index"
          :shopInfo="item"
        ></shop-item-info>
      </div>
    </div>
  </div>
</template>
<script>
import { getShopInfo, getShopList } from "@/api/shop.js";
import shopItemInfo from "@/components/ShopItemInfo.vue";

export default {
  name: "",
  props: ["shopList"],
  data() {
    return {
      activeId: 0,
      activeIndex: 0,
      loading: true,
    };
  },
  components: {
    shopItemInfo,
  },
  // async activated() {
  //   let id = this.$route.params.id;
  //   let shopInfo = await getShopInfo(id);
  //   this.bannerInfo = shopInfo.data;
  //   // console.log(this.bannerInfo);
  //   this.banner = "https://elm.cangdu.org/img/" + this.bannerInfo.image_path;
  //   // console.log(this.$refs.banner);
  //   let shopList = await getShopList(id);
  //   this.shopList = shopList.data;
  //   // console.log(this.shopList);
  //   if (this.shopList) {
  //     this.loading = false;
  //   }
  // },
};
</script>
<style lang="less" scoped>
.shopMain {
  width: 100%;
  .shopList {
    background: #e4e4e4;
    display: flex;
    justify-content: space-between;
    div,
    span {
      color: #666;
    }
    .lnav {
      width: 30%;
      text-align: center;
      div {
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      div.active {
        background: #fff;
      }
    }
    .rmain {
      width: 70%;
      background: #fff;
      div {
        color: #666;
        font-size: 13px;
      }
      .rtitle {
        width: 100%;
        height: 36px;
        line-height: 36px;
        background: #e4e4e4;
        .text {
          font-weight: 700;
          font-size: 18px;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>