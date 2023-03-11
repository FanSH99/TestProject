<template>
  <div class="about">
   <h1 v-color="'blue'" v-show="isShow">这是一个关于的页面</h1>
  <my-btn type="success" round="true">学习</my-btn>
  <button @click="show">显示</button>
  <button @click="add">num++</button>
  <p>{{num}}</p>
  </div>
 
</template>
<script>
import showMixins from '@/mixins/showMixins'
export default {
  data() {
    return {
   
    }
      
 },
 mixins: [showMixins],
}
</script>
