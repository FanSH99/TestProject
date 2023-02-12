<template>
<div>
    <div class="foods">
     <div class="left" ref="navLeft">
        <ul>
            <li v-for="(item,index) in foodsList" :key="index" :class="{active:getIndex==index}" @click="changeFoods(index)">{{item.name}}</li>
        </ul>
     </div>
     <div class="right" ref="content">
        <div style="padding-bottom: 50px;">
            <div v-for="(item,index) in foodsList" :key="index" ref="foodscontent">
             <div class="title">
                <span class="name">{{item.name}}</span> {{item.description}}
             </div>
             <div>
                <div class="foods_item" v-for="(foods,i) in item.foods" :key="i">
                    <div class="left_img">
                        <img v-lazy="`https://elm.cangdu.org/img/${foods.image_path}`" alt="">
                    </div>
                    <div class="right_content">
                        <p class="name">{{foods.name}}</p>
                        <p class="msg"> 月售{{foods.month_sales}}份 好评率{{foods.satisfy_rate}}% </p>
                        <div class="price">
                            <div class="pricenum">￥{{foods.specfoods[0].price}}</div>
                            <div class="price_num">
                                <div class="reduce" v-show="foods.num!=0" @click="reduce(foods.specfoods)">
                                    -
                                </div>
                                 <div class="num" v-show="foods.num!=0">{{foods.num}}</div>
                                <div class="add" v-if="foods.specfoods.length==1" @click="add(foods.specfoods[0])">
                                   +
                                </div>
                                <div v-else>
                                    <van-tag type="primary" @click="changeSku(index,i)">选规格</van-tag>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
         </div>
        </div>
     </div>
  </div>
  <!-- 选择规格 -->
  <div>
    <van-popup v-model="show" :style="{width:'80%'}">
        <div class="foodsName">
              {{foodsName}} 
              <van-icon name="cross" class="close" @click="show = false" />
        </div>
        <div class="sku_title">
            规格
        </div>
        <div class="skuList">
            <div :class="{sku:true,active:skuActive==index}" v-for="(item,index) in skuList" :key="index" @click="skuActive=index">
               {{item.specs_name}}
            </div>
        </div>
        <footer>
            <div class="price" v-if="skuList.length !=0">
                ￥{{skuList[skuActive].price}}
            </div>
            <div>
                <van-button type="info" size="mini" @click="addSkuCart">加入购物车</van-button>
            </div>
        </footer>
    </van-popup>
  </div>
</div>
</template>
<script>
import bus from '@/utils/bus';
// 引入better-scroll 核心库
import BScroll from '@better-scroll/core'
import { getShopFoods } from '@/api/shop';
import { Toast } from 'vant';
export default {
  props:['restaurant_id'],
  data(){
    return {
       foodsList:[],
      // 右侧滚动实例
       rightScroll:null,
       //左侧滚动实例
       leftScroll:null,
       // 存放每一个食品分类所对应的滚动高度
       scrollHeight:[],
       scrollY:0,
       show:false,
       skuList:[],
       foodsName:"",
       skuActive:0
    }
  },
 async created(){
    bus.$on("clearCart",()=>{
        this.renderNum();
    })
    let res = await getShopFoods({restaurant_id:this.restaurant_id});
    console.log(res)
    this.foodsList = res.data;
    // 渲染当前购物车中的数据
    this.renderNum();
    this.$emit("over")
    // 所有dom更新结束后创建better-scroll实例
    this.$nextTick(()=>{
        // 创建右侧滚动实例 参数一 要滚动的dom 
        this.rightScroll = new BScroll(this.$refs.content,{
            // click 默认为fasle 为true 时表示滚动区域可以点击
            click:true,
            // 当probeType 为3时表示任何时候都可以监听到滚动事件
            probeType:3
        })
        // 监听右侧滚动
        this.rightScroll.on("scroll",(position)=>{
            // console.log()
            // 获取当前y中滚动的距离
            this.scrollY = Math.abs(position.y);
            // console.log(this.scrollY)
        })
        this.leftScroll = new BScroll(this.$refs.navLeft,{
            click:true,
            probeType:3
        })
        this.getHeight();
    })
  },
  methods:{
     getHeight(){
        this.scrollHeight= [];
        // 表示第一种食物滚动位置
        let height = 0;
        this.scrollHeight.push(0)
        // 获取所有食物dom
        let dom = this.$refs.foodscontent;
        dom.forEach((item)=>{
            this.scrollHeight.push(height+=item.clientHeight)
        })
        console.log(this.scrollHeight)
     },
     changeFoods(index){
        // 获取当前食品要滚动的距离
        // console.log(this.scrollHeight[index])
        // console.log(this.rightScroll)
        // 右侧滚动区域滚动到指定位置
        this.rightScroll.scrollTo(0,-this.scrollHeight[index],300)
     },
    //  加入购物车
     add(foods){
        this.$store.commit("addCart",foods)
        this.renderNum();
     },
     renderNum(){
        let cartList = this.$store.state.cartList;
        if(!cartList){
            cartList = {};
        }
        if(!cartList[this.restaurant_id]){
            this.foodsList.forEach(item=>{
            item.foods.forEach(foods=>{
                // 所有商品数量初始化为0
                this.$set(foods,"num",0)
            })
        }) 
        console.log(this.foodsList)
        return      
        }
        let foodsList = cartList[this.restaurant_id];
        console.log(foodsList)
        this.foodsList.forEach(item=>{
            item.foods.forEach(foods=>{
                // foodsList.forEach((cartFoods)=>{
                //     // 判断当前购物车中商品是否和便利得到的每一商品一样 若一样则将当前商品购物车中的商品数量赋值 商品列表中食物数量
                //     if(foods.item_id === cartFoods.item_id){
                //         this.$set(foods,"num",cartFoods.num)
                //     }
                // })
                let index =foodsList.findIndex((cartFoods)=>{
                    return cartFoods.item_id == foods.item_id
                })
                if(index!=-1){
                    this.$set(foods,'num',foodsList[index].num)
                }else{
                    this.$set(foods,'num',0)
                }
            })
        })
     },
    //  减少购物车数量
    reduce(sku){
        if(sku.length>1){
            Toast("多规格商品需要去购物车删除！！")
            return
        }
        // 获取当前要删除的商品规格
        let foodsSku = sku[0];
        this.$store.commit('reduceCart',foodsSku)
        this.renderNum();
    },
    changeSku(index,i){
       //获取当前点击的商品信息
       let foods = this.foodsList[index].foods[i];
       this.foodsName = foods.name;
      console.log(foods)
      this.skuList = foods.specfoods;
       this.show = true;
    },
    addSkuCart(){
        let food = this.skuList[this.skuActive];
        console.log(food)
        this.$store.commit("addCart",food);
        this.renderNum();
        this.show = false;
    }
  },
  computed:{
    getIndex(){
        return this.scrollHeight.findIndex((item,index)=>{
             return this.scrollY>=item && this.scrollY<this.scrollHeight[index+1]
        })
    }
  }
}
</script>
<style lang="less" scoped>
.foods{
    width: 100%;
    height: calc(100vh - 120px - 11.73333vw);
    background: #f1f1f1;
    display: flex;
    border-top: 1px solid #e4e4e4;
    .left{
        width: 25%;
        height: 100%;
        overflow: hidden;
        li{
            width: 100%;
            text-align: center;
            height: 48px;
            line-height: 48px;
            font-size: 13px;
            color: #666;
        }
        .active{
            background: #fff;
            position: relative;
        }
        .active::before{
            content:"";
            width: 4px;
            height: 48px;
            background: #3190e8;
            position: absolute;
            left: 0;
            top: 0;
        }
    }
    .right{
        width: 75%;
        height: 100%;
        overflow: hidden;
        background: #fff;
        .title{
            padding: 10px;
            font-size: 14px;
            color: #b4b4b4;
            background: #f1f1f1;
            .name{
                font-size: 16px;
                font-weight: bolder;
                color:#666;
            }
        }
        .foods_item{
            display: flex;
            padding: 10px;
            border-bottom: 1px solid #e4e4e4;
            img{
                width: 55px;
            }
            .right_content{
                width: 80%;
                margin-left: 10px;
                .name{
                    font-size: 16px;
                    font-weight:bolder;
                    color: #333;
                }
                .msg{
                    font-size: 13px;
                    color: #b4b4b4;
                    margin: 5px 0;
                }
                .price{
                    display: flex;
                    justify-content: space-between;
                    .pricenum{
                        font-weight: 700;
                        color: red;
                        font-size: 15px;
                    }
                    .add{
                        width: 15px;
                        height: 15px;
                        text-align: center;
                        line-height: 15px;
                        font-size: 10px;
                        background: #3190e8;
                        color: #fff;
                        border-radius: 50%;
                        margin-top: 3px;
                    }
                    .num{
                        width: 15px;
                        height: 15px;
                        text-align: center;
                        line-height: 15px;
                        font-size: 10px;
                        margin-top: 3px;
                    }
                    .price_num{
                        display: flex;
                    }
                    .reduce{
                        width: 15px;
                        height: 15px;
                        text-align: center;
                        line-height: 12px;
                        font-size: 10px;
                        border: 1px solid #3190e8;
                        border-radius: 50%;
                        margin-top: 3px;
                    }
                }
            }
        }
    }
}
.foodsName{
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: #444;
    padding: 15px;
    .close{
        float: right;
        margin-right: 5px;
    }
}
.sku_title{
    padding: 10px;
    font-size: 14px;
    color: #666;
}
.skuList{
    display: flex;
    padding: 0 10px;
    flex-wrap: wrap;
    .sku{
        padding:5px 10px;
        font-size: 13px;
        border: 1px solid #e4e4e4;
        color: #666;
        margin-right: 5px;
        margin-bottom: 10px;
    }
    .active{
        border: 1px solid #3190e8;
        color: #3190e8;
    }
}
footer{
    display: flex;
    padding: 10px;
    justify-content: space-between;
    background: #f1f1f1;
    .price{
        color: red;
        margin-top: 3px;
    }
}
</style>