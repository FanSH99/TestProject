<template>
  <div class="appraise" ref="appraise">
    <div>
      <div class="scores" v-if="scores">
        <div class="left">
          <div class="zonghe">
            {{ Math.ceil(scores.overall_score) }}
          </div>
          <div style="font-size: 16px; color: #666; margin: 5px 0">
            综合评价
          </div>
          <div style="font-size: 13px; color: #b4b4b4">
            高于周边商家 {{ Math.round(scores.compare_rating * 1000) / 10 }}%
          </div>
        </div>
        <div class="right">
          <div style="font-size: 15px; color: #666">
            服务态度：
            <van-rate
              v-model="scores.service_score"
              :size="7"
              readonly
              color="#f60"
              void-icon="star"
              void-color="#eee"
            />
            <span style="font-size: 13px; margin-left: 5px; color: #f60"
              >4.7</span
            >
          </div>
          <div style="font-size: 15px; color: #666; margin: 5px 0">
            菜品评价：
            <van-rate
              v-model="scores.food_score"
              :size="7"
              readonly
              color="#f60"
              void-icon="star"
              void-color="#eee"
            />
            <span style="font-size: 13px; margin-left: 5px; color: #f60"
              >4.8</span
            >
          </div>
          <div style="font-size: 14px; color: #666">
            送达时间：<span style="font-size: 13px; color: #b4b4b4"
              >{{ scores.deliver_time }}分钟</span
            >
          </div>
        </div>
      </div>
      <div class="list">
        <div class="tags">
          <div
            v-for="(item, index) in tags"
            :key="index"
            @click="changeTags(index,item.name)"
          >
            <div
              :class="{
                tag: true,
                active_tag: active == index,
                unsatisfied: item.unsatisfied,
              }"
            >
              {{ item.name }} ({{ item.count }})
            </div>
          </div>
        </div>
        <div class="ratings">
          <div v-for="(item, index) in list" :key="index" class="rating_item">
            <div class="left">
              <img :src="item.avatar | getUrl" alt="" />
            </div>
            <div class="center">
              <div class="username">
                {{ item.username }}
              </div>
              <div>
                <van-rate
                  v-model="item.rating_star"
                  icon="star"
                  void-icon="star-o"
                  readonly
                  size="10"
                  color="#FF9A0D"
                />
                <span class="time_spent_desc">{{ item.time_spent_desc }}</span>
              </div>
              <div>
                <div class="item_foods">
                  <div v-for="(value, i) in item.item_ratings" :key="i">
                    <img
                      :src="value.image_hash | getUrl"
                      alt=""
                      class="foods_img"
                    />
                  </div>
                </div>
                <div class="item_food_name">
                  <div
                    v-for="(value, i) in item.item_ratings"
                    :key="i"
                    class="food_name"
                  >
                    {{ value.food_name }}
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              {{ item.rated_at }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);
// 引入评分api
import { getShopScores, getTags, pingjiaMsg } from "@/api/shop";
import { hideLoading, showLoading } from "@/tools/loadingToast";
export default {
  data() {
    return {
      active: 0,
      pageScroll: null,
      scores: null,
      tags: [],
      food_score: 5,
      query: {
        tag_name: "全部",
        offset: 0,
        limit: 10,
      },
      list: [],
      isLoading:false
    };
  },
  async mounted() {
    // 发送请求获取评分
    let res = await getShopScores(this.$store.state.id);
    this.scores = res.data;
    let res1 = await getTags(this.$store.state.id);
    console.log(res1);
    this.tags = res1.data;
    let res2 = await pingjiaMsg(this.$store.state.id, this.query);
    this.list = [...this.list, ...res2.data];
    this.$nextTick(() => {
      this.pageScroll = new BScroll(this.$refs.appraise, {
        click: true,
        probeType: 3,
        pullUpLoad: true,
      });
      this.pageScroll.on("pullingUp",this.pullingUpHandler)
    });
  },
  methods: {
    changeTags(index,tag_name) {
      this.active = index;
      this.query.tag_name = tag_name;
      this.list = [];
      this.query.offset = 0;
      this.getDataList();
    },
    async getDataList() {
      this.isLoading = true;
      showLoading();
      let res = await pingjiaMsg(this.$store.state.id, this.query);
      console.log(res);
      this.list = [...this.list, ...res.data];
      this.isLoading = false
      hideLoading();
    //   结束上啦加载行为
      this.pageScroll.finishPullUp();
    //   重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常
     this.pageScroll.refresh();
    },
    pullingUpHandler(){
        if(this.isLoading){
            return 
        }
      this.query.offset += 10;
      this.getDataList();
    }
  },
};
</script>
<style lang="less" scoped>
.appraise {
  width: 100%;
  height: calc(100vh - 120px - 11.73333vw);
  background: #f1f1f1;
  overflow: hidden;

  .scores {
    width: 100%;
    padding: 10px;
    display: flex;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    .left {
      width: 50%;
      text-align: center;

      .zonghe {
        font-size: 25px;
        color: #f60;
      }
    }

    .right {
      width: 50%;
    }
  }

  .list {
    background: #fff;
    margin-top: 10px;

    .tags {
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      border-bottom: 1px solid #f1f1f1;

      .tag {
        font-size: 13px;
        padding: 7px;
        border-radius: 4px;
        background: #ebf5ff;
        color: #6d7885;
        margin-top: 5px;
        margin-right: 10px;
      }

      .unsatisfied {
        background: #f5f5f5;
        color: #aaa;
      }

      .active_tag {
        background: #3190e8;
        color: #fff;
      }
    }

    .ratings {
      width: 100%;
      padding: 20px 10px;
      padding-top: 10px;

      .rating_item {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 15px 0;
        border-bottom: 1px solid #f1f1f1;

        .left {
          width: 15%;
          text-align: center;

          img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            display: block;
            margin: 0 auto;
          }
        }

        .center {
          width: 65%;

          .item_foods {
            margin: 5px 0;
            display: flex;
          }

          .foods_img {
            width: 70px;
            margin-right: 10px;
          }

          .item_food_name {
            display: flex;

            .food_name {
              margin-right: 5px;
              width: 60px;
              padding: 5px;
              border-radius: 3px;
              border: 1px solid #e4e4e4;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 13px;
              color: #b4b4b4;
            }
          }

          .username {
            font-size: 14px;
            color: #666;
            margin-bottom: 5px;
          }

          .time_spent_desc {
            font-size: 14px;
            color: #666;
            margin-left: 5px;
          }
        }

        .right {
          width: 20%;
          text-align: center;
          font-size: 13px;
          color: #b4b4b4;
        }
      }
    }
  }

  .loading {
    width: 100%;
    padding: 10px;
    text-align: center;
    background: #fff;
  }
}
</style>