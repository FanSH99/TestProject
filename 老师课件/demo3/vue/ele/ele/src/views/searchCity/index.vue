<template>
  <div class="page">
    <my-nav-bar>
      <template #left>
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </template>
      <template #center>
        <div v-if="city">{{ city.name }}</div>
      </template>
      <template #right>
        <div @click="$router.push('/city')">切换城市</div>
      </template>
    </my-nav-bar>
    <div class="search">
      <input
        type="search"
        placeholder="输入学校、商务楼、地址"
        v-model="keywords"
      />
      <div @click="search">提交</div>
    </div>
    <div class="list" v-show="list.length != 0">
      <div class="searchList">
        <div
          class="listitme"
          v-for="(item, index) in list"
          :key="index"
          @click="goHome(item)"
        >
          <p class="p1">{{ item.name }}</p>
          <p class="p2">{{ item.address }}</p>
        </div>
      </div>
    </div>
    <div v-show="list.length == 0 && !isData">
      <div class="title">搜索历史：</div>
      <div class="searchList">
        <div class="listitme" v-for="(item, index) in historyList" :key="index"      @click="goHome(item)">
          <p class="p1">{{ item.name }}</p>
          <p class="p2">{{ item.address }}</p>
        </div>
        <div class="clear" @click="clearHistory" v-if="historyList.length != 0">
          清空所有
        </div>
      </div>
    </div>
    <div class="nodata" v-show="isData">抱歉!无搜索结果</div>
  </div>
</template>
<script>
// 引入搜索城市api
import { getSearchCity, getCityInfo } from "@/api/city";
import { hideLoading, showLoading } from "@/tools/loadingToast";
import { Toast } from "vant";
export default {
  data() {
    return {
      city_id: 0,
      keywords: "",
      list: [],
      city: null,
      isData: false,
      historyList: [],
    };
  },
  async created() {
    // 获取城市id
    this.city_id = this.$route.params.id;
    let res = await getCityInfo(this.city_id);
    this.city = res.data;
    // 获取本地存储的 历史搜索
    let historyList = localStorage.getItem("cityList");
    if (historyList) {
      this.historyList = JSON.parse(historyList);
    } else {
      this.historyList = [];
    }
  },
  methods: {
    async search() {
      if (!this.keywords) {
        Toast("内容为空");
        return;
      }
      // 组合请求参数
      let data = {
        city_id: this.city_id,
        keyword: this.keywords,
        type: "search",
      };
      showLoading();
      // 发送请求搜索地址
      let res = await getSearchCity(data);
      console.log(res);
      this.list = res.data;
      if (res.data.length == 0) {
        this.isData = true;
      } else {
        this.isData = false;
      }
      hideLoading();
    },
    goHome(item) {
      localStorage.setItem("geohash",item.geohash)
      this.$router.push({
        path: "/home?geohash="+item.geohash,
      });
      // 获取本地存储的搜索地址
      let cityHistory = localStorage.getItem("cityList");
      if (cityHistory) {
        cityHistory = JSON.parse(cityHistory);
      } else {
        cityHistory = [];
      }
      // 判断当前搜索历史中是否已存在该地址
      let index = cityHistory.findIndex((value) => {
        return value.name === item.name;
      });
      if (index == -1) {
        // 将当前点击的地址信息添加到历史搜索列表中
        cityHistory.push(item);
      }
      // 将添加后的搜索列表存入本地
      localStorage.setItem("cityList", JSON.stringify(cityHistory));
    },
    clearHistory() {
      // 删除本地存储的数据
      localStorage.removeItem("cityList");
      this.historyList = [];
    },
  },
  watch: {
    // 监听输入框内容 若为空则清空搜索列表
    keywords(newVal) {
      if (newVal == "") {
        this.list = [];
      }
    },
  },
};
</script>
<style lang="less" scoped>
.search {
  width: 100%;
  background: #fff;
  padding: 10px 20px;
  margin-top: 10px;
  input {
    width: 100%;
    height: 35px;
    font-size: 14px;
    border: 1px solid #e4e4e4;
    padding: 0 4px;
    border-radius: 3px;
  }
  div {
    width: 100%;
    height: 35px;
    margin-top: 10px;
    background: #3190e8;
    color: #fff;
    font-size: 14px;
    text-align: center;
    line-height: 35px;
    border-radius: 4px;
  }
}
.title {
  padding: 10px 10px;
  font-size: 13px;
  color: #666;
}
.searchList {
  width: 100%;
  background: #fff;
  .listitme {
    padding: 15px 20px;
    border-bottom: 1px solid #e4e4e4;
    .p1 {
      font-size: 17px;
      color: #444;
    }
    .p2 {
      width: 100%;
      font-size: 13px;
      color: #b4b4b4;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 10px;
    }
  }
}
.list {
  margin-top: 8px;
}
.nodata {
  text-align: center;
  width: 100%;
  background: #fff;
  padding: 10px 20px;
  font-size: 16px;
  color: #b4b4b4;
}
.clear {
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size: 15px;
}
</style>