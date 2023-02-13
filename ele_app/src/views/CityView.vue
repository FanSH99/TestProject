<template>
  <div class="city page">
    <top>
      <template #left>
        <span>ele.me</span>
      </template>
      <template #center>
        <span></span>
      </template>
      <template #right>
        <span>登录 | 注册</span>
      </template>
    </top>
    <div class="guess">
      <div>
        <span class="text">当前定位城市</span>
        <span class="text_right">定位不准请在城市列表选择</span>
      </div>
      <div>
        <city-item :cityItem="guess"></city-item>
        <van-icon name="arrow" class="text" size="20" />
      </div>
    </div>
    <div v-if="loading">
      <loading></loading>
    </div>
    <div v-else>
      <div class="hot">
        <van-cell title="热门城市" />
        <div class="hotList">
          <city-item
            :cityItem="item"
            v-for="(item, index) in hot"
            :key="index"
          ></city-item>
        </div>
      </div>
      <ul>
        <li></li>
      </ul>
      <div class="group">
        <van-grid v-for="(item, key, index) in group" :key="index">
          <van-cell
            >{{ key }}<span v-if="index == 0">（按字母排序）</span></van-cell
          >
          <city-item
            :cityItem="list"
            v-for="(list, idx) in item"
            :key="idx"
          ></city-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
import cityItem from "@/components/CityItem.vue";
import { getCityList } from "@/api/city.js";
export default {
  name: "",
  data() {
    return {
      guess: [],
      hot: [],
      group: [],
      loading: true,
    };
  },
  components: {
    cityItem,
  },
  methods: {
    goInfo(id) {
      console.log(id);
      this.$router.push({
        path: "/city/" + id,
      });
    },
  },
  async created() {
    // 获取当前定位城市
    let guessData = await getCityList("guess");
    this.guess = guessData.data;
    let hotData = await getCityList("hot");
    this.hot = hotData.data;
    let groupData = await getCityList("group");
    let groupList = groupData.data;
    let arr = [];
    for (let key in groupList) {
      arr.push(key);
    }
    arr = arr.sort();
    console.log(arr);
    let groupObj = {};
    arr.forEach((item) => {
      groupObj[item] = groupList[item];
    });
    console.log(groupObj);
    this.group = groupObj;
    if (this.group) {
      this.loading = false;
    }
  },
};
</script>
<style lang="less" scoped>
@h: 40px;

.text {
  height: @h;
  line-height: @h;
  color: #666;
}
.text_right {
  color: #9f9f9f;
  font-weight: bold;
}
.guess {
  font-size: 14px;
  background: #fff;
  div {
    padding: 0 10px;
    height: @h;
    line-height: @h;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e4e4e4;
    span {
      height: @h;
      line-height: @h;
    }
  }
  .all-city {
    color: #3190e8;
  }
}
.hot {
  margin: 10px 0;
  background: #fff;
  .hotList {
    display: flex;
    flex-wrap: wrap;
    .all-city {
      border: 1px solid #e4e4e4;
      color: #3190e8;
    }
  }
}
.group {
  background: #fff;
  .all-city {
    border: 1px solid #e4e4e4;
  }
}
</style>