<template>
    <div class="nav">
        <div v-for="(item,index) in navList" :key="index" :class="{active:activeIndex == index}" @click="goNav(index)">
                {{item.title}}
        </div>
    </div>
  </template>
  <script lang="ts">
  import Vue from 'vue';
  export default Vue.extend({
    data(){
      return{
        navList:[
            {
                title:"首页",
                path:"/"
            },{
                title:"分类",
                path:"/cate"
            },{
                title:"购物车",
                path:"/cart"
            },{
                title:"我的",
                path:"/mine"
            }
        ],
        activeIndex:0
      }
    },
    methods:{
        goNav(index:number):void{
            this.activeIndex = index;
            this.$router.push({
                path:this.navList[index].path
            })
        }
    }
  })
  </script>
<style scoped>
.nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.nav div{
    width: 25%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    font-weight: 700;
    position: relative;
}
.active::before{
    content: "";
    width: 20px;
    height: 3px;
    background-color: red;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -10px;

}
.active{
    color: red;
}
</style>