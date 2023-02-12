<template>
  <div class="cate">
    <div class="cateName">
        <ul>
            <li v-for="(item,index) in cateList" :key="index" :class="{cate_item:true,active:active==index}" @click="changeActive(index)">
            <div>
                <img :src="item.image_url | getUrl" alt=""> {{item.name}}
            </div>
            <div>
                <van-tag round type="primary">{{item.count}}</van-tag> <van-icon name="arrow" />
            </div>
            </li>
        </ul>
    </div>
    <div class="cateContent">
        <ul>
            <li v-for="(item,index) in getList" :key="index" :class="{item:true,subactive:subactive==index}" @click="changeSub(index,item.name,item.id)">
            <span>{{item.name}}</span>
            <span>{{item.count}}</span>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import { getCateList } from '@/api/cate';
export default {
   props:['latitude','longitude'],
  data(){
    return {
       cateList:[],
       active:0,
       subactive:0
    }
  },
  async created(){
    // console.log(this.latitude,this.longitude)
    let data = {
        latitude:this.latitude,
        longitude:this.longitude
    }
    let res = await getCateList(data);
    console.log(res)
    this.cateList = res.data
  },
  methods:{
    changeActive(index){
        this.active = index
    },
    changeSub(index,name,id){
        this.subactive = index;
        // 向父组件发送自定义事件
        this.$emit("sendcate",name,id)
    }
  },
  computed:{
    getList(){
         if(!this.cateList[this.active]){
            return []
         }
         this.subactive = 0;
        return this.cateList[this.active].sub_categories
    }
  },
}
</script>
<style lang="less" scoped>
.cate{
    display: flex;
    .cateName{
        width: 50%;
        background: #f1f1f1;
        font-size: 13px;
        color: #666;
        .cate_item{
            display: flex;
            justify-content: space-between;
            padding: 10px 5px;
            img{
                width: 20px;
                vertical-align: middle;
            }
        }
    }
    .cateContent{
        width: 50%;
        padding: 0 10px;
        .item{
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #e4e4e4;
            font-size: 14px;
            color:#666
        }
    }
}
.active{
    background: #fff;
}
.subactive{
    color: rgb(49, 144, 232) !important;
}
</style>