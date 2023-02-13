<template>
  <div class="cart" id="cart">
    <van-goods-action>
      <van-goods-action-icon icon="cart-o" text="购物车" @click="goCart" />
      <van-goods-action-icon icon="star-o" text="收藏" @click="addCollect()" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="showProup"
      />
      <van-goods-action-button type="danger" text="立即购买" @click="goBuy()" />
    </van-goods-action>
    <van-popup
      v-model="show"
      round
      position="bottom"
      :style="{ height: '70%' }"
      class="cartMain"
    >
      <div class="info" v-if="info">
        <div class="left">
          <img :src="info.productInfo.image" alt="" />
        </div>
        <div class="right">
          <p class="van-ellipsis name">{{ info.productInfo.storeName }}</p>
          <p class="price">￥{{ info.productInfo.price }}</p>
          <p class="stock">{{ info.productInfo.stock }}</p>
        </div>
      </div>
      <div class="selType">
        <div v-for="(item, index) in info.productAttr" :key="index">
          <div class="type">
            <p class="name">{{ item.attrName }}</p>
            <p class="value">
              <van-button
                plain
                type="primary"
                round
                v-for="(value, idx) in item.attrValues"
                :key="idx"
                >{{ value }}</van-button
              >
            </p>
          </div>
        </div>
      </div>
      <div class="btn"></div>
    </van-popup>
  </div>
</template>
<script>
import { addCartInfo } from "@/api/cart";
export default {
  name: "",
  props: ["id", "info"],
  data() {
    return {
      show: false,
      attrValues: [],
    };
  },
  created() {
    console.log(this.info.productAttr);
    // console.log(this.info.productAttr.attrValues[0].split());
    // this.attrValues = this.info.productAttr.attrValues.split();
    // console.log(this.attrValues);
    this.info.productAttr.forEach((item) => {
      item.attrValues = item.attrValues.split(",");
      // this.attrValues.push(value);
    });
    console.log(this.info);
  },
  methods: {
    goCart() {
      if (!localStorage.getItem("token")) {
        this.$router.push({
          path: "/login",
        });
      } else {
        this.$router.push({
          path: "/cart",
        });
      }
    },
    showProup() {
      this.show = true;
    },
    addCollect() {
      // console.log(this.id);
    },
    async addCart() {
      // console.log(this.id);
      let obj = {
        category: "",
        id: this.id,
      };
      let add = await addCartInfo(obj);
    },
    goBuy() {},
  },
};
</script>
<style lang="less" scoped>
.cartMain {
  padding: 25px 20px 20px;
}
.info {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  .left {
    width: 30%;
    img {
      width: 100%;
    }
  }
  .right {
    width: 70%;
    margin-left: 20px;
    .name {
      font-size: 15px;
    }
    .price {
      font-size: 17px;
      margin: 10px 0px 5px;
      color: #ff7600;
      font-weight: 700;
    }
    .stock {
      font-size: 14px;
      color: #b4b4b4;
    }
  }
}
.selType {
  width: 100%;
  display: flex;
  flex-direction: column;
  .name {
    color: #b4b4b4;
  }
  .value {
    color: #b4b4b4;
    display: flex;
    flex-wrap: wrap;
  }
  button{
  margin:5px;
}
}

</style>
