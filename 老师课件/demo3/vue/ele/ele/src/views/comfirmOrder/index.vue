<template>
    <div class="page">
       <my-nav-bar>
        <template #left>
                <div class="lefts">
                    <van-icon name="arrow-left" @click="$router.go(-1)"></van-icon>
                </div>
            </template>
            <template #center>
                <div>
                    确认订单
                </div>
            </template>
       </my-nav-bar>
        <div>
            <!-- <van-contact-card type="add" add-text="请添加一个收货地址" v-if="ArrayList.length==0"/> -->
            <van-contact-card type="edit" name="231 15518835995" tel="张胜爆炒鸡(瓦屋里店)" />
        </div>
        <div class="sdsj" >
            <div class="time">
                送达时间
            </div>
            <div class="right">
                <p class="p1">尽快送达 | 预计 {{orderinfo.delivery_reach_time}}</p>
                <p class="p2"> 
                    <van-tag type="primary" class="tag">蜂鸟专送</van-tag>
                </p>
            </div>
        </div>
        <div style="margin: 10px 0;">
            <van-cell title="支付方式" value="在线支付" is-link  @click="show=true"/>
             <van-cell title="红包" value="暂时只在饿了么APP中支持" />
        </div>
        <div class="foods">
            <div class="foodsname">
                <img :src="`https://elm.cangdu.org/img/${orderinfo.cart.restaurant_info.image_path}`" alt="" class="shop_img"> <span>{{orderinfo.cart.restaurant_info.name}}</span>
            </div>
            <div>
                <div class="foodslist" v-for="(item,index) in orderinfo.cart.groups[0]" :key="index">
                    <span>
                        {{item.name}} 
                    </span>
                    <span>
                        <span class="num"> ✖ {{item.quantity}}</span>
                        <span>￥{{item.price}}</span>
                    </span>
                </div>
                <div class="foodslist" v-for="(item) in orderinfo.cart.extra" :key="item.name">
                    <span>{{item.name}}</span>
                    <span>￥{{item.price}}</span>
                </div>
                   <div class="foodslist" style=" border-bottom: 1px solid #F1F1F1;">
                    <span>配送费</span>
                    <span>￥{{orderinfo.cart.deliver_amount}}</span>
                </div>
                <div class="foodslist">
                    <span>订单￥{{orderinfo.cart.total}}</span>
                    <span class="vc">待支付</span>
                </div>
                 <div class="foodslist">
                    <span></span>
                    <span class="vc">{{orderinfo.cart.total}}</span>
                </div>
            </div>
            <div >
                   <div class="foodslist">
                    <span>订单备注</span>
                    <span class="live">
                        口味、偏好等    <van-icon name="arrow" />
                    </span>
                </div>
                  <div class="foodslist">
                    <span>发票抬头</span>
                    <span class="live">
                        不需要开发票   <van-icon name="arrow" />
                    </span>
                </div>
            </div>
        </div>
        <div class="footer">
            <div>待支付￥{{orderinfo.cart.total}}</div>
            <div class="btn">确认下单</div>
        </div>

        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
        <div>
            <div class="title">
                支付方式
            </div>
            <div>
            <van-radio-group v-model="radio">
                 <div v-for="(item,index) in orderinfo.payments" :key="index" class="payments">
                    <div :class="{disable:!item.is_online_payment}">
                        {{item.name}}({{item.description}})
                 </div>
                 <div>
                      <van-radio  checked-color="#4cd964" :disabled="!item.is_online_payment"></van-radio>
                 </div>
                 </div>
                 </van-radio-group>
            </div>
        </div>
        </van-popup>
    </div>
</template>
<script>
import {createOrder} from '@/api/order'
export default {
    data() {
        return {
            ArrayList:[],
            orderinfo:null,
            data:null,
            show:false,
            radio:1,
            data:null
        }
    },
    async created(){
        // 获取所有店铺购物车数据
        let cartList = this.$store.state.cartList;
        let shopCart = cartList[this.$store.state.id];
        if(!shopCart){
            this.$router.go(-1)
        }
        let  entities = [];
        shopCart.forEach(item=>{
            let obj = {
                id:item.food_id,
                name:item.name,
                packing_fee:item.packing_fee,
                price:item.price,
                quantity:item.num,
                sku_id:item.sku_id,
                specs:item.specs,
                stock:item.stock
            }
            entities.push([obj])
        })
        let data = {
            restaurant_id:this.$store.state.id,
            geohash:localStorage.getItem("geohash"),
            entities:entities
        }
        console.log(data)
      let res = await createOrder(data);
      console.log(res)
      this.orderinfo = res.data;
    }
}
</script>
<style lang="less" scoped>
.page{
    padding-bottom: 80px;
}
.sdsj{
    padding: 10px;
    background: #fff;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    border-left: 3px solid #3190e8;
    .time{
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
    }
    .right{
        padding: 10px 0;
    }
    .p1{
        font-size: 16px;
        color:#3190e8;
    }
    .p2{
        margin-top: 10px;
        .tag{
            float: right;
        }
    }
}
.foods{
    padding: 10px 20px;
    background: #fff;
    .foodsname{
        padding: 10px 0;
        font-size: 15px;
        
    border-bottom: 1px solid #F1F1F1;   
    }
    .shop_img{
        width: 30px;
        vertical-align: middle;
    }
    .foodslist{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #666;
        padding: 10px 0;
        .num{
            color: #f60;
            margin-right: 30px;
        }
        .vc{
            color: #f60;
        }
        .live{
            color: #b4b4b4;
        }
    }
}
.footer{
    width: 100%;
    background: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    position: fixed;
    bottom: 0;
    z-index: 999;
    div{
    padding: 15px 15px;
    }
    .btn{
        background: #56d176;
    }
}
.van-popup{
    bottom: 0 !important;
}
.title{
    font-size: 14px;
    color: #666;
    width: 100%;
    text-align: center;
    padding: 15px;
    background: #fafafa;
}
.payments{
    display: flex;
    justify-content: space-between;
    padding: 15px;
    font-size: 17px;
}
.disable{
    color: #b4b4b4;
}
</style>