<template>
  <div class="page">
   <my-nav-bar>
     <template #left>
            ele.me
     </template>
   
     <template #right>
        登录 | 注册
     </template>
   </my-nav-bar>
   <div class="guess">
        <div>
            <span class="guess_one">当前定位城市</span>
            <span class="guess_two"> 定位不准时请在城市列表选择 </span>
        </div>
        <div class="cityname" @click="goCityInfo(city.id)">
            <span class="name" v-if="city">
                {{city.name}}
            </span>
            <span class="right">
                <van-icon name="arrow" />
            </span>
        </div>
   </div>
   <div class="hot">
    <div class="hotCity">
    <div class="title">
        热门城市
    </div>
    <div class="cityList">
        <div v-for="(item,index) in hotList" :key="index" @click="goCityInfo(item.id)">
            {{item.name}}
        </div>
    </div>
   </div>
   </div>
   <div class="allCity">
    <div class="hotCity" v-for="(item,index) in allList" :key="index">
    <div class="title">
        {{item.title}} <span v-if="index==0">(按字母排序)</span>
    </div>
    <div class="cityList">
        <div v-for="(value,i) in item.list" :key="i" class="cityname" @click="goCityInfo(value.id)">
            {{value.name}}
        </div>
    </div>
   </div>
   </div>
  </div>
</template>
<script>
// 导入获取城市列表Api
import { getCityLitst } from '@/api/city';
import { hideLoading, showLoading } from '@/tools/loadingToast';
export default {
  data(){
    return {
       city:null,
       hotList:[],
       allList:[]
    }
  },
 async created(){
    showLoading();
    // 获取当前定位城市
    let res = await getCityLitst({type:"guess"});
    this.city = res.data;
    // 获取热门城市
    let hotCity = await getCityLitst({type:"hot"});
    console.log(hotCity)
    this.hotList = hotCity.data;
    // 获取所有城市
    let allCity = await getCityLitst({type:"group"});
    console.log(allCity.data)
    let keyList = [];
    // for in 遍历对象得到每一个key
    for(let key in allCity.data){
        keyList.push(key)
    }
    // 将字母排序
    keyList = keyList.sort();
    keyList.forEach(item=>{
        let obj = {
            title:item,
            list:allCity.data[item]
        }
        this.allList.push(obj)
    })
    hideLoading();
  },
  methods:{
    // 跳转城市详情
    goCityInfo(id){
        console.log(id)
        this.$router.push({
            path:"/city/"+id
        })
    }
  }
}
</script>
<style lang="less" scoped>
.guess{
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #E4E4E4;
    div{
        display: flex;
        justify-content: space-between;
        padding: 13px 10px;
        font-size: 13px;
        border-bottom: 1px solid #e4e4e4;
        .guess_one{
            color:#666
        }
        .guess_two{
            color: #9f9f9f;
            font-weight: bold;
        }
    }
    .cityname{
        font-size: 15px;
        .name{
            color:#3190e8
        }
        .right{
            font-size: 17px;
            color:#999
        }
    }
}
.hot{
    margin: 15px auto;
    
    border-top: 2px solid #e4e4e4;
}
.hotCity{
    width: 100%;
    background: #fff;
    .title{
        padding: 10px 12px;
        font-size: 13px;
        color: #666;
        border-bottom: 1px solid #e4e4e4;
    }
    .cityList{
        display: flex;
        flex-wrap: wrap;
        .cityname{
            color: #666 !important;
        }
        div{
            width: 25%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 13px;
            color: #3190e8;
            border-right: 1px solid #e4e4e4;
            border-bottom: 1px solid #e4e4e4;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}
</style>