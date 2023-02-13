<template>
  <div>
    <div v-if="isloading">
      <loading></loading>
    </div>
    <div class="homeMain">
      <div class="cate">
        <van-swipe :loop="false">
          <van-swipe-item
            v-for="(item, index) in cate"
            :key="index"
            loop="false"
          >
            <van-grid>
              <van-grid-item
                icon="photo-o"
                :text="list.title"
                v-for="(list, idx) in item"
                :key="idx"
                @click="goCateInfo(list.id, list.title)"
              >
                <template #icon>
                  <img :src="list.image_url | getImg" alt="" class="icon" />
                </template>
              </van-grid-item>
            </van-grid>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="near">
        <div>
          <van-cell class="tig text" icon="shop-o" title="附近商家"> </van-cell>
          <near-item
            v-for="(item, index) in shoppingList"
            :key="index"
            :nearItem="item"
          ></near-item>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCate, getShops } from "@/api/home.js";
export default {
  name: "",
  data() {
    return {
      active: "0",
      cityInfo: "",
      cityname: "",
      cateList: [],
      active: 0,
      cate: [],
      shoppingList: [],
      geohash: "",
      latitude: "",
      longitude: "",
      isloading: true,

      offset: 0,
    };
  },
  filters: {
    getImg(text) {
      return "https://fuss10.elemecdn.com" + text;
    },
  },
  async created() {
    let homeinfo = localStorage.getItem("homeinfo");
    homeinfo = JSON.parse(homeinfo);
    this.cityname = homeinfo.name;
    this.latitude = homeinfo.latitude;
    this.longitude = homeinfo.longitude;
    let cate = await getCate();
    let cateList = cate.data;
    let num = Math.floor(cateList.length / 8);
    for (let i = 0; i < num; i++) {
      let arr = cateList.splice(0, 8);
      this.cate.push(arr);
    }
    if (cateList.length != 0) {
      this.cate.push(cateList);
    }
    // console.log(this.cate);

    let data = {
      latitude: this.latitude,
      longitude: this.longitude,
      offset: this.offset,
    };

    let shop = await getShops(data);
    // console.log(shop);
    this.shoppingList = [...this.shoppingList, ...shop.data];
    // console.log(this.shoppingList);
    if (this.shoppingList) {
      this.isloading = false;
    }
  },
  methods: {
    goCateInfo(id, title) {
      this.$router.push({
        path: "/cate/info",
        query: {
          id: id,
          title: title,
          latitude: this.latitude,
          longitude: this.longitude,
        },
      });
    },
  },
};
</script>
<style lang="less">
.homeMain {
  overflow: hidden;
  // padding-bottom: 50px;
}
.icon {
  width: 36px;
}

.near {
  margin-top: 10px;
  color: #9b9b9b;
  .tig span {
    font-size: 12px;
    margin-left: 5px;
    color: #9b9b9b;
  }
  i {
    color: #9b9b9b;
  }
}
</style>