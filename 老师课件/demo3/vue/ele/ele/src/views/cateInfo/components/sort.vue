<template>
  <div class="list">
     <div v-for="(item,index) in list" :key="index" class="list_item" @click="goSort(item.id,item.title)">
            <div class="left">
                <van-icon :name="item.icon" :color='item.color'/>
            </div>
            <div class="right">
                {{item.title}}
            </div>
     </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
       list:[
        {
            id:1,
            title:"起送价最低",
            icon:'gold-coin-o',
            color:"rgb(230, 182, 26)"
        },    {
            id:2,
            title:"配送速度",
            icon:"clock-o",
            color:"rgb(55, 199, 183)"
        },    {
            id:3,
            title:"评分",
            icon:"star-o",
            color:"rgb(230, 182, 26)"
        },    {
            id:4,
            title:"智能排序",
            icon:"sort",
            color:"rgb(49, 144, 232)"
        },    {
            id:5,
            title:"距离最近",
            icon:'location-o',
            color:"rgb(95, 180, 222)"
        },    {
            id:6,
            title:"销量最高",
            icon:"fire-o",
            color:"red"
        }
       ]
    }
  },
  methods:{
    goSort(id,title){
        this.$emit("sendsort",id,title)
    }
  }
}
</script>
<style lang="less" scoped>
.list_item{
    display: flex;
    .left{
        width: 15%;
        text-align: center;
        height: 50px;
        line-height: 50px;
        font-size: 17px;
    }
    .right{
        width: 85%;
        color: #666;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #e4e4e4;
        font-size: 14px;
    }
}
</style>