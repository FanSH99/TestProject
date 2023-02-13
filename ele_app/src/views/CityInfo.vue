<template>
  <div class="cityInfo page">
    <top>
      <template #left>
        <router-link to="/"
          ><van-icon name="arrow-left" size="20px" color="#fff"
        /></router-link>
      </template>
      <template #center>
        <span>{{ cityname }}</span>
      </template>
      <template #right>
        <span>切换城市</span>
      </template>
    </top>
    <div class="search">
      <van-form @submit="onSubmit">
        <input
          class="cityinput"
          v-model="keywords"
          placeholder="输入学校、教务楼、地址"
        />
        <div class="searchBtn">
          <van-button block type="info" size="small" native-type="submit"
            >提交</van-button
          >
        </div>
      </van-form>
    </div>

    <div v-if="searchList.length != 0" class="searchMain">
      <div
        v-for="(item, index) in searchList"
        :key="index"
        class="van-hairline--bottom searchItem"
        @click="goHomeInfo(item, item.geohash)"
      >
        <div class="van-ellipsis">{{ item.name }}</div>
        <div class="van-ellipsis text">{{ item.address }}</div>
      </div>
    </div>
    <div v-else class="historyMain">
      <div v-if="historyList.length != 0">
        <div class="text title">搜索历史：</div>
        <div
          v-for="(item, index) in historyList"
          :key="index"
          class="van-hairline--bottom searchItem"
          @click="goHomeInfo(item.info, item.info.geohash)"
        >
          <div class="van-ellipsis">{{ item.info.name }}</div>
          <div class="van-ellipsis text">{{ item.info.address }}</div>
        </div>
        <div class="clear" @click="clearHistory">清空所有</div>
      </div>
      <div v-else class="text">暂无搜索历史~~</div>
    </div>
  </div>
</template>
<script>
import { getCityList, getCityInfo, getAreas } from "@/api/city.js";
export default {
  name: "",
  data() {
    return {
      id: "",
      info: "",
      cityname: "",
      keywords: "",
      searchList: [],
      historyList: [],
    };
  },
  async created() {
    this.id = this.$route.params.id;
    let cityInfo = await getCityInfo(this.id);
    console.log(cityInfo);
    this.cityname = cityInfo.data.name;
    console.log(this.cityname);
    let history = localStorage.getItem("search");
    history = JSON.parse(history);
    // console.log(history);
    this.historyList = history;
    console.log(this.historyList);
  },
  methods: {
    async onSubmit() {
      let data = {
        city_id: this.id,
        keyword: this.keywords,
      };
      let search = await getAreas(data);
      this.searchList = search.data;
      console.log(search);
    },
    clearHistory() {
      this.historyList = [];
      localStorage.removeItem("search");
    },
    goHomeInfo(item, geohash) {
      console.log(item, geohash);
      let obj = {
        cityname: this.cityname,
        id: this.id,
        keyword: this.keywords,
        info: item,
      };
      let search = localStorage.getItem("search");
      search = JSON.parse(search);
      console.log(search);
      if (!search) {
        localStorage.setItem("search", JSON.stringify([obj]));
      } else {
        search.forEach((ele) => {
          if (ele.info.geohash != geohash) {
            search.push(obj);
          }
        });
        localStorage.setItem("search", JSON.stringify(search));
      }
      localStorage.setItem("homeinfo", JSON.stringify(item));
      this.$router.push({
        path: "/index/" + this.geohash,
      });
    },
  },
};
</script>
<style lang="less" scoped>
.cityInfo {
  padding: 10px 0;
}
.search {
  background: #fff;
  padding: 20px;
  margin-bottom: 10px;
}
.searchBtn {
  margin-top: 10px;
}
.cityinput {
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid #e4e4e4;
}
.searchMain {
  background: #fff;
}
.text {
  color: #666;
}
.searchItem {
  padding: 15px 20px;
  cursor: pointer;
  div {
    font-size: 14px;
    padding: 3px 0;
  }
}
.historyMain {
  background: #fff;
  padding: 15px 20px;
  .title {
    border-bottom: 1px solid #e4e4e4;
    padding: 5px 0;
  }
}
.clear {
  text-align: center;
  padding: 5px 0;
}
</style>