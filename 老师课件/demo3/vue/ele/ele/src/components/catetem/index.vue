<template>
  <div class="cate">
        <div v-for="(item,index) in 8" :key="index" class="cate_item">
            <div class="cate_img"></div>
            <div class="cate_title"></div>
        </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
       
    }
  }
}
</script>
<style lang="less" scoped>
.cate{
    width: 100%;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // padding: 20px 0;
    padding-top: 20px;
    .cate_item{
        width: 25%;
        margin-bottom: 20px;
        .cate_img{
            width: 45px;
            margin: 0 auto;
            height: 45px;
            background: #f1f1f1;
            border-radius: 50%;
        }
        .cate_title{
            width: 55px;
            height: 15px;
            background: #f1f1f1;
            margin: 0 auto;
            margin-top: 10px;
        }
    }
}
</style>