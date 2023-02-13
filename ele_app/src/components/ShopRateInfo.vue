<template>
  <div>
    <div v-if="loading">
      <loading></loading>
    </div>
    <div class="rateMain" v-else>
      <div class="rate_top">
        <div class="rate_left rate">
          <div class="rate_num">{{ rate.overall_score | getFixed }}</div>
          <div class="total_rate">综合评价</div>
          <div class="small">
            高于周边商家<span>{{ rate.compare_rating | getFixed }}</span>
          </div>
        </div>
        <div class="rate_right rate">
          <div class="star_rate">
            服务态度：
            <van-rate
              v-model="rate.service_score"
              allow-half
              void-icon="star"
              void-color="#eee"
              color="#ffd21e"
              readonly
              gutter="1px"
              size="12px"
              class="star"
            />
            <span class="rate_text">{{ rate.service_score | getFixed }}</span>
          </div>
          <div class="star_rate">
            菜品评价：
            <van-rate
              v-model="rate.food_score"
              allow-half
              void-icon="star"
              void-color="#eee"
              color="#ffd21e"
              readonly
              gutter="1px"
              size="12px"
              class="star"
            />
            <span class="rate_text">{{ rate.food_score | getFixed }}</span>
          </div>
          <div>
            送达时间：<span class="small">{{ rate.deliver_time }}分钟</span>
          </div>
        </div>
      </div>
      <div class="all_rate" v-if="allRateInfo">
        <div
          v-for="(item, index) in rateTigs"
          :key="index"
          :class="{ active: index === rateTigActive }"
        >
          <van-tag size="large" color="#ebf5f5" text-color="#6d7885"
            >{{ item.name }}({{ item.count }})</van-tag
          >
        </div>
      </div>
      <div class="rateInfo" v-if="allRate">
        <div v-for="(item, index) in allRate" :key="index" class="rate_item">
          <div class="left">
            <img src="https://elm.cangdu.org/img/default.jpg" alt="" />
          </div>
          <div class="right">
            <div class="userinfo">
              <span> {{ item.username }}</span>
              <span>{{ item.rated_at }}</span>
            </div>
            <div class="rateinfo">
              <van-rate
                v-model="item.rating_star"
                allow-half
                void-icon="star"
                void-color="#eee"
                color="#ffd21e"
                readonly
                gutter="1px"
                size="12px"
                class="star"
              />
              <span>{{ item.time_spent_desc }}</span>
            </div>
            <div class="showGoods">
              <div v-for="(img, idx) in item.item_ratings" :key="idx">
                <img :src="img.image_hash | getImg" alt="" />
                <span>{{ img.food_name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getRateTigs, getRateAll, getRateHasImg } from "@/api/shop.js";
export default {
  name: "",
  props: ["rate"],
  data() {
    return {
      rateTigActive: 0,
      rateTigs: [],
      loading: true,
      allRate: [],
      rate_active: "allRate",
      allRateInfo: {
        allRate: {
          title: "全部",
          list: [],
        },
        satisfaction: {
          title: "满意",
          list: [],
        },
        insatisfaction: {
          title: "不满意",
          list: [],
        },
        hasImg: {
          title: "有图",
          list: [],
        },
        goodtaste: {
          title: "味道好",
          list: [],
        },
        fast: {
          title: "送货快",
          list: [],
        },
        enough: {
          title: "分量足",
          list: [],
        },
        beautiful: {
          title: "包装精美",
          list: [],
        },
        clean: {
          title: "干净卫生",
          list: [],
        },
        fresh: {
          title: "食材新鲜",
          list: [],
        },
        goodsevice: {
          title: "服务不错",
          list: [],
        },
      },
    };
  },
  filters: {
    getFixed(text) {
      if (text < 1) {
        return (text * 100).toFixed(1) + "%";
      } else {
        return text.toFixed(1);
      }
    },
    getImg(text) {
      return "https://fuss10.elemecdn.com/d/c8/" + text + ".jpeg";
    },
  },
  async created() {
    let id = this.$route.params.id;
    let rateTig = await getRateTigs(id);
    this.rateTigs = rateTig.data;
    let allRate = await getRateAll(id);
    this.allRate = allRate.data;
    if (this.allRate) {
      this.loading = false;
    }
    this.allRateInfo.allRate.list = allRate.data;
    allRate.data.forEach((item) => {
      item.item_ratings.forEach((item_info) => {
        if (item_info.image_hash != "") {
          this.allRateInfo.hasImg.list.push(item);
        }
        if (item.time_spent_desc != "") {
          this.allRateInfo.fast.list.push(item);
        }
      });
      if (item.time_spent_desc != "") {
        this.allRateInfo.fast.list.push(item);
      }
      if (item.rating_star >= 4) {
        this.allRateInfo.satisfaction.list.push(item);
      } else {
        this.allRateInfo.insatisfaction.list.push(item);
      }
    });
    console.log(this.allRateInfo);
  },
  // async activated() {
  //   let id = this.$route.params.id;
  //   let rating = await getRate(id);
  //   console.log(rating);
  //   this.rate = rating.data;
  //   console.log(this.rate);
  //   this.value_service = this.rate.service_score;
  //   this.value_food = this.rate.food_score;
  //   let allRate = await getAllRate(id);
  //   // console.log(allRate);
  //   this.allRateInfo.allRate.list = allRate.data;
  //   allRate.data.forEach((item) => {
  //     item.item_ratings.forEach((item_info) => {
  //       if (item_info.image_hash != "") {
  //         this.allRateInfo.hasImg.list.push(item);
  //       }
  //       if (item.time_spent_desc != "") {
  //         this.allRateInfo.fast.list.push(item);
  //       }
  //     });
  //     if (item.time_spent_desc != "") {
  //       this.allRateInfo.fast.list.push(item);
  //     }
  //     if (item.rating_star >= 4) {
  //       this.allRateInfo.satisfaction.list.push(item);
  //     } else {
  //       this.allRateInfo.insatisfaction.list.push(item);
  //     }
  //   });
  //   console.log(hasImg, satisfaction, insatisfaction);
  // },
};
</script>
<style lang="less" scoped>
.rateMain {
  width: 100%;
  .rate_top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #e4e4e4;
    background: #fff;
    .rate {
      display: flex;
      flex-direction: column;
      width: 50%;
    }
    .small {
      font-size: 13px;
      color: #666;
    }
    .rate_text {
      color: rgb(255, 102, 0);
      font-size: 13px;
    }
    .rate_left {
      width: 45%;
      text-align: center;
      span {
        margin-left: 5px;
      }
      div {
        padding: 5px 0;
      }
    }
    .rate_right {
      width: 55%;
      span {
        margin: 5px;
      }
      div {
        padding: 3px 0;
      }
    }
    .rate_num {
      font-size: 24px;
      color: rgb(255, 102, 0);
    }
    .total_rate {
      font-size: 18px;
    }
  }
  .all_rate {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #e4e4e4;
    div {
      margin: 3px 5px;
      cursor: pointer;
    }
    .active span {
      background: #3190e8 !important;
      color: #fff !important;
    }
  }
}

.rateInfo {
  background: #fff;
  .rate_item {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    .userinfo {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 13px;
        color: #666;
      }
    }
    .left {
      width: 15%;
    }
    img {
      width: 100%;
    }
    .right {
      width: 80%;
    }
  }
  .showGoods {
    margin-top: 5px;
    overflow: hidden;
    display: flex;
    div {
      width: 70px;
      height: 100px;
      margin-right: 5px;
    }
    span {
      display: inline-block;
      width: 70px;
      border: 1px solid #e4e4e4;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
      color: #666;
    }

    img {
      width: 70px;
      height: 70px;
      margin-right: 5px;
    }
  }
}
</style>