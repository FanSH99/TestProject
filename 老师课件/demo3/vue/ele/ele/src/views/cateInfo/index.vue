<template>
  <div class="page">
    <my-nav-bar>
      <template #left>
        <van-icon name="arrow-left" @click="$router.go(-1)" />
      </template>
      <template #center>
        <div>{{ title }}</div>
      </template>
    </my-nav-bar>
    <div class="mymenu">
      <van-dropdown-menu>
        <van-dropdown-item :title="title" ref="item1"> 
            <cate-list :latitude="query.latitude" :longitude="query.longitude" @sendcate="getcate"></cate-list>
        </van-dropdown-item>
        <van-dropdown-item :title="sortTitle" ref="item2"> 
            <sort-list @sendsort="getsortId"></sort-list>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" ref="item3"> 
           <select-shop :latitude="query.latitude" :longitude="query.longitude" @sendidlist="getList"></select-shop>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div class="loading" v-if="shopList.length ===0 && !isData">
        <img src="../../assets/loading.svg" alt="" v-for="item in 6" :key="item">
    </div>
    <p class="nodata" v-show="isData">没有更多数据~~</p>
    <div class="shopList" v-if="shopList.length != 0">
        <div class="list">
          <div v-for="(item, index) in shopList" :key="index" class="list_item">
            <myshop :shopInfo="item"></myshop>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import myshop from '@/components/shop'
let cateList = ()=>import("./components/cateList.vue")
let sortList = ()=>import("./components/sort.vue")
let selectShop = ()=>import("./components/selectShop.vue")
import { getShopList } from '@/api/home';
export default {
  data() {
    return {
      title: "",
      shopList:[],
    //   查询参数
      query:{
        latitude:"",
        longitude:"",
        restaurant_category_id:"",
        order_by:4,
        delivery_mode:[],
        support_ids:[],
        restaurant_category_ids:[]
      },
      sortTitle:"智能排序",
      isData:false
    };
  },
  components:{
    myshop,
    cateList,
    sortList,
    selectShop
  },
  created() {
    // 获取路由传递的 经纬度 以及当前分类id 分类名称
    let { latitude, longitude, id, title } = this.$route.query;
    console.log(id)
    this.title = title;
    this.query.latitude = latitude;
    this.query.longitude = longitude;
    this.query.restaurant_category_id = id;
    this.getDataList();
  },
  methods:{
    async getDataList(){
        this.shopList = [];
        this.isData = false
        let res = await getShopList(this.query);
        console.log(res)
        this.shopList = res.data
        if(res.data.length==0){
            this.isData = true
        }
    },
    getcate(name,id){
        this.query.restaurant_category_ids = [];
        this.title = name;
        console.log(id)
        this.query.restaurant_category_ids.push(id);
        // 获取列表
        this.getDataList();
        // console.log(this.$refs.item1)
        // 隐藏分类下拉菜单
        this.$refs.item1.toggle(false);
    },
    getsortId(id,title){
        this.query.order_by = id;
        this.sortTitle = title;
        this.getDataList();
        this.$refs.item2.toggle(false);
    },
    getList(modeList,shopList){
        this.query.delivery_mode=[];
        this.query.support_ids = [];
        modeList.forEach(item=>{
            this.query.delivery_mode.push(item.id)
        })
        shopList.forEach(item=>{
            this.query.support_ids.push(item.id)
        })
        this.$refs.item3.toggle(false);
        this.getDataList();
    }
  }
};
</script>
<style lang="less" scoped>
.loading{
    img{
        width: 100%;
    }
}
.shopList{
    background: #fff;
}
.nodata{
    text-align: center;
    padding: 10px 0;
    font-size: 15px;
    color: #666;
}
</style>