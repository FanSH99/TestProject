<template>
  <div class="home">
    <roomItem v-for='(item,index) in list' :key="index" :roomItem='item'/>
    <loading v-show="isLoading" />
  </div>
</template>
<script>
import roomItem from '@/components/roomItem.vue'
export default {
  data(){
    return {
       offset:1,
       list:[],
      //  当前请求状态
       isLoading:false
    }
  },
  components:{
    roomItem
  },
  created(){
   this.getDataList();
  //  监听页面滚动
   window.onscroll = this.pageScroll;
  },
  methods:{
    getDataList(){
      // 更改加载状态
      this.isLoading = true;
      this.$axios.get(`/api/RoomApi/live?offset=${this.offset}&limit=20`).then(res=>{
      console.log(res)
      this.list = [...this.list,...res.data.data]
      this.isLoading = false;
     })
    },
    pageScroll(){
      console.log("我滚动啦")
      // 获取滚动的距离
      let scrollTop = document.documentElement.scrollTop;
      scrollTop = Math.ceil(scrollTop)
      // 获取屏幕的高度
      let clienHeight = document.documentElement.clientHeight;
      // 获取内容的高度
      let contentHeight = document.documentElement.scrollHeight;
      if(scrollTop+clienHeight >= contentHeight){
        console.log("滚动到底啦")
        // 判断请求是否结束,若请求中则禁止请求
        if(this.isLoading){
           return
        }
        this.offset +=20
        this.getDataList();
      }
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  width: 90%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
 
}
</style>