<template>
  <div class="page pagehome">
    <my-nav-bar>
      <template #left>
        <van-icon name="search" />
      </template>
      <template #center>
        <div v-if="city" class="cityname" @click="$router.push('/city')">
          {{ city.name }}
        </div>
      </template>
      <template #right>
        <div>登录 | 注册</div>
      </template>
    </my-nav-bar>
    <div v-if="cateList.length == 0">
      <my-cate></my-cate>
    </div>
    <div class="mySwiper" v-else>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#3190e8">
        <van-swipe-item v-for="(item, index) in cateList" :key="index">
          <div class="cate">
            <div class="cate_item" v-for="(value, i) in item" :key="i" @click="goInfo(value.id,value.title)">
              <img
                :src="'https://fuss10.elemecdn.com' + value.image_url"
                alt=""
              />
              <p>
                {{ value.title }}
              </p>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="shopList" v-if="shopList.length != 0">
      <div class="title"><van-icon name="shop-o" /> 附近商家</div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        offset="50"
      >
        <div class="list">
          <div v-for="(item, index) in shopList" :key="index" class="list_item">
            <myshop :shopInfo="item"></myshop>
          </div>
        </div>
      </van-list>
    </div>
    <div class="loading" v-else>
      <img
        src="@/assets/loading.svg"
        alt=""
        v-for="(item, index) in 6"
        :key="index"
      />
    </div>
  </div>
</template>
<script>
import { getLocation, getShopCate, getShopList } from "@/api/home";
import { hideLoading, showLoading } from "@/tools/loadingToast";
import myshop from "@/components/shop";
export default {
  data() {
    return {
      city: null,
      cateList: [],
      shopList: [],
      offset: 0,
      loading:false,
      finished:false
    };
  },
  components: {
    myshop,
  },
  async created() {
    // 获取路径传递的经纬度
    let geohash = this.$route.query.geohash;
    showLoading();
    // console.log(geohash)
    let res = await getLocation(geohash);
    this.city = res.data;
    hideLoading();
    // 获取店铺分类
    let data = await getShopCate();
    let num = data.data.length / 8;
    num = Math.floor(num);
    let cateList = [];
    for (let i = 0; i < num; i++) {
      cateList[i] = data.data.slice(i * 8, (i + 1) * 8);
    }
    if (data.data.length % 8 != 0) {
      // 获取 余数
      let n = data.data % 8;
      //  n = 2
      cateList[num] = data.data.slice(num * 8);
    }
    this.cateList = cateList;
    //  获取店铺列表
    this.getDataList();
  },
  methods: {
    async getDataList() {
      let data = {
        latitude: this.city.latitude,
        longitude: this.city.longitude,
        offset: this.offset,
      };
      let res = await getShopList(data);
      console.log(res);
      this.shopList = [...this.shopList,...res.data]
      this.loading = false
      // 若请求到数组长度为0时则表示没有数据啦
      if(res.data.length ==0){
        this.finished = true
      }
    },
    onLoad(){
      this.offset +=20;
      // this.loading = true;
      console.log("滚动到底部啦")
      this.getDataList();
    },
    // 跳转详情
    goInfo(id,title){
      this.$router.push({
        path:"/cate/info",
        query:{
          latitude:this.city.latitude,
          longitude:this.city.longitude,
          id:id,
          title:title
        }
      })
    }
  },
};
</script>
<style lang="less" scoped>
.cityname {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cate {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  padding-top: 20px;
  .cate_item {
    width: 25%;
    text-align: center;
    margin-bottom: 20px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    p {
      font-size: 14px;
      color: #666;
      margin-top: 5px;
    }
  }
}
.mySwiper {
  border-bottom: 1px solid #e4e4e4;
}
.loading {
  img {
    width: 100%;
  }
}
.shopList {
  margin-top: 10px;
  background: #fff;
  .title {
    padding: 15px;
    font-size: 13px;
    color: #9b9b9b;
  }
}
.pagehome {
  padding-bottom: 13.33333vw;
}
</style>