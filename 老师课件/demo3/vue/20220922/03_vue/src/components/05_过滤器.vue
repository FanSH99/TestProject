<template>
  <div>
    {{num | filterNum(10)}}
  </div>
</template>
<script>
export default {
  data(){
    return {
       num:1234456
    }
  },
  filters:{
    // 过滤器必须要有一个return值
    filterNum(text,num){
        return text / 10000 +num
    }
  }
}
</script>
<style>
</style>