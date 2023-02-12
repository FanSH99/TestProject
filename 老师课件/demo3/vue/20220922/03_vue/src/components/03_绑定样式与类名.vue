<template>
  <div>
    <h1 :class="className?'red':'blue'">好好学习天天向上</h1>
    <h1 :class="{red:className,blue:className}">好好学习天天向上</h1>
    <h2 :style="myStyle">哈哈哈哈</h2>
  </div>
</template>
<script>
export default {
  data(){
    return {
        className:true,
        myStyle:{
            color:"red",
            fontSize:'30px'
        }
    }
  }
}
</script>
<style>
</style>