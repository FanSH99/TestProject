<template>
  <div class="page">
      <my-nav-bar>
          <!-- 具名插槽 -->
          <template #left>
              <div class="lefts">
                  <van-icon name="arrow-left" @click="$router.go(-1)"></van-icon>
              </div>
          </template>
          <template #center>
              <div>
                  订单列表
              </div>
          </template>
      </my-nav-bar>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="list">
          <div class="item" v-for="(item,index) in list" :key="index">
              <div class="item_left"> 
                  <img :src="`https://elm.cangdu.org/img/${item.restaurant_image_url}`" alt="">
              </div>
              <div class="item_right">
                  <div class="rigth_one">
                      <span class="shopName">
                        {{item.restaurant_name}} 
                          <van-icon name="arrow" />
                      </span>
                      <span>
                        {{item.status_bar.title}} 
                      </span>
                  </div>
                  <div class="time">
                    {{item.order_time}}
                  </div>
                  <div class="num">
                   
                      <span>{{item.basket.group[0][0].name}}</span>
                      <span class="price">¥{{item.total_amount}}</span>
                  </div>
                  <div>
                      <div class="pay" v-if="item.status_bar.title!='支付超时'">
                            去支付
                      </div>
                          <div class="pay pays" v-else>
                           再来一单
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </van-pull-refresh>
  </div>
</template>
<script>
import { getOrderList } from '@/api/order';
import { Toast } from 'vant';
export default {
  data() {
      return {
          list:[],
          query:{
            limit:10,
            offset:0
          },
          isLoading:false
      }
  },
  created(){
    this.getList();
  },
  methods:{
    async getList(){
      let res  = await getOrderList(this.$store.state.user_id,this.query)
      console.log(res)
      if(res.data.length ==0){
        Toast.fail("没有更多数据！")
      this.isLoading = false
        return
      }
      this.list = res.data;
      this.isLoading = false
    },
    onRefresh(){
       this.query.offset+=10
       this.isLoading = true;
       this.getList();
    }
  },
}
</script>
<style scoped>
.list{
padding-bottom: 13.33333vw;
}
.item{
  display: flex;
  margin-bottom: 20px;
  padding: 15px;
      background: #fff;
}
.item_left{
  width: 15%;
}
.item_left img{
  width: 100%;
}
.item_right{
  width: 85%;
  font-size: 13px;
  color: #666;
  padding: 0 10px;
}
.rigth_one{
  display: flex;
  justify-content: space-between;
}
.shopName{
  font-size: 17px;
  color: #333;
}
.time{
  padding: 8px 0;
  border-bottom: 1px solid #f1f1f1;
}
.num{
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
    border-bottom: 1px solid #f1f1f1;
}
.price{
  color: #f60;
  font-size: 16px;
  font-weight: bold;
}
.pay{
  padding: 3px;
  border: 1px solid;
  display: inline-block;
  margin-top: 10px;
  float: right;
  border-radius: 5px;
  font-size: 12px;
  color: orange;
  border: 1px solid orange;
}
.pays{
  color: #3190e8;
   border: 1px solid #3190e8;
}

</style>