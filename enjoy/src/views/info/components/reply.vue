<template>
  <div class="reply" id="reply" v-if="replyInfo">
    <div class="replyMain" v-if="replyInfo.sumCount > 0">
      <p class="title">用户评价({{ replyInfo.sumCount }})</p>
      <div class="replyList">
        <div class="left">
          <img :src="replyInfo.productReply.avatar" alt="" />
        </div>
        <div class="right">
          <div class="tig">
            <span>{{ replyInfo.productReply.nickname }}</span>
            <div class="score">
              <van-rate
                v-model="replyInfo.productReply.score"
                :size="16"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
                gutter="0"
              />
            </div>
            <span>{{ replyInfo.productReply.createTime }}</span>
          </div>
          <div>{{ replyInfo.productReply.sku }}</div>
          <div>{{ replyInfo.productReply.comment }}</div>
        </div>
      </div>
    </div>
    <div class="replyMain" v-else>
      <p class="title">用户评价({{ replyInfo.sumCount }})</p>
      <div class="replyList">
        <p class="noReply title">暂无评价</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getreply } from "@/api/info";
export default {
  name: "",
  data() {
    return {
      replyInfo: null,
    };
  },
  async created() {
    let id = this.$route.params.id;
    let reply = await getreply(id);
    // console.log(reply);
    this.replyInfo = reply.data.data;
    // console.log(this.replyInfo);
  },
};
</script>
<style lang="less" scoped>
.reply {
  padding: 10px;
  .replyMain {
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    .title {
      color: #b4b4b4;
    }
    .replyList {
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
      .left {
        width: 15%;
        img {
          width: 100%;
        }
      }
      .right {
        width: 83%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-between;
        font-size: 14px;
        div {
          margin-bottom: 8px;
        }
        .tig {
          display: flex;
          .score {
            margin: 1px 5px;
          }
        }
      }
    }
    .noReply {
      width: 100%;
      text-align: center;
    }
  }
}
</style>