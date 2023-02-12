<template>
  <div class="slider">
    <ul>
        <li @click="goPage('/')">首页         <i class="fa fa-angle-right fa-lg"></i> </li>
        <li @click="goPage('/cate')">分类         <i class="fa fa-angle-right fa-lg"></i> </li>
        <li @click="goPage('/tuijian')">推荐         <i class="fa fa-angle-right fa-lg"></i> </li>
        <li @click="goPage('/mine')">我的         <i class="fa fa-angle-right fa-lg"></i> </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
       
    }
  },
  methods:{
    goPage(path){
        this.$router.push({
            path:path
        })
        // 提交muations 隐藏导航栏
        this.$store.commit("changeSlider");
    }
  }
}
</script>
<style lang="less" scoped>
    // vh viewHeight
    // vw 100vw 1个屏幕的宽
    .slider{
        position: fixed;
        top: 50px;
        left: 0;
        width:150px;
        height:calc(100vh - 50px);
        background: #333;
        z-index: 999;
        li{
            width: 100%;
            padding: 10px 10px;
            color: #fff;
            font-size: 14px;
            cursor: pointer;
            margin-top: 20px;
        }
        li:hover{
            background: #444;
        }
        .fa-angle-right{
            float: right;
        }
    }
</style>