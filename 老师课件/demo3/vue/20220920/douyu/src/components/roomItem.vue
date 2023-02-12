<template>
  <div class="room" @click="goInfo(roomItem.room_id,roomItem.nickname)">
     <div class="imgbox">
         <img :src="roomItem.room_src" alt="">
         <div class="tip">
            <span>{{roomItem.nickname}}</span>
            <span>
                <i class="fa  fa-heart-o fa-lg"></i> {{roomItem.online | getOnline}}
            </span>
         </div>
     </div>
     <div class="footer">
        <i class="fa  fa-tv fa-lg"></i>   {{roomItem.room_name}}
     </div>
  </div>
</template>
<script>
export default {
  props:{
    roomItem:Object
  },
  data(){
    return {
       
    }
  },
  filters:{
    getOnline(text){
        return (text/10000).toFixed(2)+"万"
    }
  },
  methods:{
    goInfo(room_id,nickname){
    this.$router.push({
      path:"/info",
      query:{
        room_id:room_id,
        nickname
      }
    })
  }
  }
}
</script>
<style lang="less" scoped>  
   .room{
      width: 320px;
      .footer{
        font-size: 13px;
        color:#444;
        padding: 10px;
      }
      .imgbox{
        width: 320px;
        border-radius: 5px;
        height: 180px;
        overflow: hidden;
        position: relative;
        .tip{
            width: 100%;
            padding: 10px 5px;
            background: rgba(11, 11, 11,0.4);
            color: #fff;
            font-size: 13px;
            display: flex;
            justify-content: space-between;
            position: absolute;
            bottom: 0;
        }
        img{
            width: 100%;
            border-radius: 5px;
            transition: 0.3s;
        }
        img:hover{
            transform: scale(1.2);
            transition: 0.3s;
        }
      }
   }
</style>