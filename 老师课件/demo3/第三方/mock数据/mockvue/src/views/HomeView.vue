<template>
  <div class="home">
    <div>
      <img :src="bannerList[0]" alt="" class="bannerImg">
    </div>
    <div class="box">
       <div v-for="(item,index) in navList" :key="index">
        <img :src="item.imgurl" alt="">
        <p>{{item.title}}</p>
       </div>
    </div>
    <div class="goods">
        <div v-for="(item,index) in list" :key="index">
          <img :src="item.imgurl" alt="">
          <div>{{item.name}}</div>
          <div>{{item.price}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HomeView',
  data() {
    return {
       bannerList:[],
       navList:[],
       list:[]
    }
  },
  created(){
    // 获取轮播图
    axios.get("/get/banner").then(res=>{
      console.log(res)
      this.bannerList = res.data.list;
    })
    axios.post("/get/navlist").then(res=>{
      console.log(res )
      this.navList = res.data.list;
    })
    axios.get("/get/list").then(res=>{
      console.log(res)
      this.list = res.data.list
    })
  }
}
</script>
<style>
.home{
  width: 100%;
}
.bannerImg{
  width: 100%;
  height: auto;
}
.box{
  display: flex;
  flex-wrap: wrap;
}
.box>div{
  width: 20%;
  text-align: center;
  margin-top: 10px;
}
.box img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
p{
  font-size: 13px;
  margin: 0;
}
</style>
