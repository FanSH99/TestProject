<template>
 <div>
    <div class="cart">
        <div class="left">
            <div :class="{cart_icon:true,active:$store.getters.getNumList.list.length>0}" @click="showCart">
                <van-badge :content="$store.getters.getNumList.list.length"  class="dot"/>
                <van-icon name="shopping-cart-o" />
            </div>
            <div class="cart_info">
                <p class="price">￥{{$store.getters.getNumList.sum}}</p>
                <p>{{tip}}</p>
            </div>
        </div>
        <div class="right">
           <div class="bth" v-show="float_minimum_order_amount - $store.getters.getNumList.sum >0">
            还差￥{{float_minimum_order_amount - $store.getters.getNumList.sum}}起送
           </div>
           <div v-show="float_minimum_order_amount - $store.getters.getNumList.sum <=0" class="goPrice" @click="$router.push('/com/order')">
                去结算
           </div>
        </div>
  </div>
  <!-- 购物车列表 -->
  <van-popup v-model="show" position="bottom">
    <div class="cart_title">
     <div>
        购物车
     </div>
     <div class="clearCartList" @click="clearCartList">
        <van-icon name="delete" /> 清空
     </div>
    </div>
    <div>
        <div v-for="(item,index) in $store.getters.getNumList.list" :key="index" class="cartList">
            <div clang="left">
                {{item.name}}({{item.specs_name}})
            </div>
            <div class="right">
                <div class="price">
                  ￥  {{item.price}}
                </div>
                <div class="addoreduce">
                    <div class="reduce" @click="reduce(item)">-</div>

                    <div class="num">{{item.num}}</div>

                    <div class="add" @click="addCart(item)">+</div>
                </div>
            </div>
        </div>
    </div>
 </van-popup>
 </div>
</template>
<script>
import bus from '@/utils/bus';
export default {
    props:['tip','float_minimum_order_amount'],
  data(){
    return {
        show:false
    }
  },
  methods:{
    showCart(){
        if(this.$store.getters.getNumList.list.length==0){
            return
        }
        this.show = true;
    },
    // 清空购物车
    clearCartList(){
        this.$store.commit("clearCart")
        this.show  = false;
        bus.$emit("clearCart")
    },
    addCart(item){
        this.$store.commit("addCart",item);
        bus.$emit("clearCart")
    },
    reduce(item){
        this.$store.commit("reduceCart",item);
        bus.$emit("clearCart")
        if(this.$store.getters.getNumList.list.length ==0){
            this.show = false
        }
    }
  }
}
</script>
<style lang="less" scoped>
.cart{
    width: 100%;
    height: 50px;
    background: #333;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    z-index: 2100;
    .left{
        padding-left: 10px;
        display: flex;
    }
    .cart_icon{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #3d3d3f;
        border: 2px solid #444;
        color:#fff;
        text-align: center;
        line-height: 60px;
        font-size: 30px;
        margin-top: -20px;
        position: relative;
    }
    .cart_info{
        color: #fff;
        font-size: 13px;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        margin-left: 10px;
        padding: 5px;
        .price{
            font-size: 20px;
            font-weight: 700;
        }
    }
    .right{
        .bth{
            height: 50px;
            text-align: center;
            line-height: 50px;
            color: #fff;
            font-size: 15px;
            background: #535356;
            padding: 0 10px;
        }
        .goPrice{
            height: 50px;
            text-align: center;
            line-height: 50px;
            color: #fff;
            font-size: 15px;
            background: #4cd964;
            padding: 0 10px;
        }
    }
    .active{
        background: #3190e8 !important;
    }
    .dot{
        position: absolute;
        top: -10px;
        right: 5px
    }
}
.van-popup--bottom{
    bottom: 50px;
}
.cart_title{
    width: 100%;
    font-size: 14px;
    color: #666;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background: #f1f1f1;
}
.cartList{
    padding: 20px 15px;
    font-size: 13px;
    color: #666;
    display: flex;
    justify-content: space-between;
    .left{
        font-size: 17px;
        font-weight: bolder;
        color:#444;
    }
    .right{
        display: flex;
        .price{
            font-size: 17px;
            font-weight: bolder;
            color: red;
        }
        .addoreduce{
            display: flex;
            margin-left: 10px;
            margin-top: 3px;
            .reduce{
                width: 15px;
                height: 15px;
                font-size: 12px;
                text-align: center;
                line-height: 12px;
                border: 1px solid #3190e8;
                border-radius: 50%;
                
            }
            .add{
                width: 15px;
                height: 15px;
                font-size: 12px;
                text-align: center;
                line-height: 15px;
                background: #3190e8;
                color: #fff;
                border-radius: 50%;
            }
            .num{
                margin: 0 5px;
            }
        }
    }
}
</style>