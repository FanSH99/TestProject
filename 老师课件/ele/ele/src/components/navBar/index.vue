<template>
  <div class="mynav">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
       
    }
  },
  created(){
   
     this.$plus(()=>{
            // 使用5+api
            plus.navigator.setStatusBarBackground("#3190e8");
    plus.navigator.setStatusBarStyle("light");
     })
  }
}
</script>
<style lang="less" scoped>
.mynav{
    width: 100%;
    height: 45px;
    background: #3190e8;
    color: #fff;
    font-size: 15px;
    line-height: 45px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 999;
    .center{
        width: 40%;
        text-align: center;
    }
    .left,.right{
        width: 30%;
    }
    .left{
        text-align: left;
    }
    .right{
        text-align: right;
    }
}
</style>