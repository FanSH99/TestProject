<template>
  <div class="about">
    <h1 v-color="'red'" v-show="isShow">This is an about page</h1>
    <mybtn type="info" :round="true">
      学习
    </mybtn>
    <button  @click="show">显示</button>
    <h1>{{num}}</h1>
  </div>
</template>
<script>
import showMixins from '@/mixins/showMixins'
export default {
  data(){
    return{
    
    }
  },
  mixins:[showMixins],
  methods:{
    show(){
      this.isShow = true
    }
  }
}
</script>
