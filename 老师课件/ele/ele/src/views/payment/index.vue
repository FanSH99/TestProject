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
                    在线支付
                </div>
            </template>
        </my-nav-bar>
        <div class="time">
            <p class="p1">
                支付剩余时间
            </p>
            <p class="p2">00:{{m | getTime}}:{{s | getTime}}</p>
        </div>
        <div class="paytype">
            <div class="title">选择支付方式</div>
            <div>
                <van-radio-group v-model="payType">
                <van-cell title="支付宝" icon="alipay">
                      <template #right-icon>
                          <van-radio name="1"></van-radio>
                      </template>
                </van-cell>
                  <van-cell title="微信" icon="wechat-pay">
                      <template #right-icon>
                          <van-radio name="2"></van-radio>
                      </template>
                </van-cell>
                </van-radio-group>
            </div>
        </div>
        <div style="margin: 15px;">
            <van-button block color="#4cd964" @click="pay">确认支付</van-button>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            payType:"1",
            m:15,
            s:0,
            time:null
        }
    },
    created(){
        this.s = 59;
        this.m = 14;
        this.time = setInterval(()=>{
            this.s--;
            if(this.m == 0 && this.s == 0){
                clearInterval(this.time)
                Toast.fail("支付超时")
                return
            }
            if(this.s == 0){
                this.m --;
                this.s = 59;
            }
        },1000)
    },
    filters:{
        getTime(num){
            if(num<10){
                return "0"+num
            }else{
                return num
            }
        }
    },
    destroyed(){
        clearInterval(this.time)
    },
    methods:{
        pay(){
            Toast.fail("当前环境不支持支付!")
              this.$router.push("/order")
        }
    }
}
</script>
<style lang="less" scoped>
.time{
    padding: 35px 10px;
    text-align: center;
    font-size: 14px;
    color: #666;
    background: #fff;
    .p2{
        font-size: 35px;
        color: #333;
        margin: 10px 0;
    }
}
.paytype{
    .title{
        color: #666;
        font-size: 14px;
        padding: 20px;
    }
}
</style>