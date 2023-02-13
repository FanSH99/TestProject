<template>
  <div class="cart">
    <div class="top">
      <div class="left"><van-icon name="wap-home-o" color="#fff" /></div>
      <div class="center">购物车</div>
      <div class="right">···</div>
    </div>
    <div class="cartMain">
      <div v-if="cartList">
        <div v-if="cartList.length == 0" class="noCart">
          <p><van-icon name="cart-o" color="#b4b4b4" size="50px" /></p>
          <p>购物车是空的~~~</p>
          <p>
            <van-button round size="small" color="linear-gradient(to right, #ff6034, #ee0a24)" @click="goHome()">
              去逛逛
            </van-button>
          </p>
        </div>
        <div v-else>
          <div class="hasCart" v-for="(item, index) in cartList" :key="index">
            <div class="sel" @click="selItem(item.attrId, index)">
              <van-checkbox-group v-model="value">
                <van-checkbox :name="item.attrId"></van-checkbox>
              </van-checkbox-group>
            </div>
            <div class="shop">
              <van-card :num="item.cartNum" :price="item.price" :desc="item.storeName" :title="item.suk"
                :thumb="item.image">
                <template #footer>
                  <div class="footer">
                    <button class="reduce" @click="reduceNum(item.cartNum)">-</button>
                    <span class="num">{{ item.cartNum }}</span>
                    <span class="add">+</span>
                  </div>
                </template>
              </van-card>
            </div>
          </div>
          <van-submit-bar :price="price * 100" button-text="提交订单" @submit="onSubmit">
            <van-checkbox v-model="checked" @click="isAllsel">全选</van-checkbox>
          </van-submit-bar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCart } from "@/api/cart";

export default {
  name: "",
  data() {
    return {
      cartList: null,
      value: [],
      price: 0,
      checked: false,
    };
  },
  methods: {
    goHome() {
      this.$router.push({
        path: "/",
      });
    },
    selItem(id, index) {
      this.value = [];
      this.price = 0;
      console.log(this.cartList[index].isSel);
      this.cartList[index].isSel = !this.cartList[index].isSel;
      console.log(this.cartList[index]);
      this.cartList.forEach((item) => {
        console.log(item.attrId, item.price, item.cartNum);
        if (item.isSel) {
          this.value.push(item.attrId);
          this.price += parseFloat(item.price) * item.cartNum;
          // console.log(this.cartList.length);
          if (this.cartList.length == this.value.length) {
            this.checked = true;
          } else {
            this.checked = false;
          }
        }
      });
      console.log(this.value, this.price);
    },
    isAllsel() {
      // this.checked = !this.checked;
      console.log(this.checked);
      if (this.checked) {
        this.cartList.forEach((item) => {
          this.value.push(item.attrId);
        });
      } else {
        this.value = [];
      }
    },
    reduceNum(num) {
      console.log(num);
      console.log(111);
    },
    onSubmit() {
      console.log(this.value);
    },
  },
  async created() {
    let cart = await getCart();
    this.cartList = cart.data.data.list;

    this.cartList.forEach((item) => {
      item.isSel = false;
    });
    console.log(this.cartList);
  },
};
</script>
<style lang="less" scoped>
.top {
  display: flex;
  justify-content: space-between;
  background: #ff6034;
  padding: 0 10px;
  height: 45px;
  line-height: 45px;
  color: #fff;
}

.noCart {
  color: #b4b4b4;
  font-size: 13px;
  margin: 100px auto;
  text-align: center;

  p {
    margin: 10px 0;
  }
}

.hasCart {
  position: relative;
  margin-bottom: 5px;
  background: #fafafa;

  .sel {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
    z-index: 999;
  }

  .shop {
    margin-left: 20px;

    span {
      display: inline-block;
    }

    .reduce,
    .add {
      box-sizing: border-box;
      width: 15px;
      height: 15px;
      border: 1px solid #ee0a24;
      color: #ee0a24;
      border-radius: 100%;
      font-size: 15px;
      text-align: center;
      line-height: 15px;
      pointer-events: none;
    }

    .add {
      background-color: #ee0a24;
      color: #fff;
    }

    .num {
      margin: 0 10px;
      font-size: 14px;
    }
  }
}

.van-submit-bar {
  bottom: 50px;
}

.van-card__footer {
  margin: 5px 0;
}
</style>