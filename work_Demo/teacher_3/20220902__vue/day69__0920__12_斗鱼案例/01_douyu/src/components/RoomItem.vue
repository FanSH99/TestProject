<template>
  
  <div class="room">
    <div class="imgbox" @click="goHomeInfo(roomItem.room_id,roomItem.nickname)">
        <img :src="roomItem.room_src" alt="">
        <div class="tip">
            <span>{{roomItem.nickname}}</span>
            <span>
                <i class="fa fa-heart-to fa-lg">{{roomItem.online | getOnline}}</i>
            </span>
        </div>
    </div>
    <p class="footer">
        <i class="fa fa-tv fa-lg"></i><span>{{roomItem.room_name}}</span>
    </p>
  </div>
</template>

<script>
export default {
    props: {
        roomItem:Object
    },
    data() {
        return {
            
        }
    },
    methods: {
        goHomeInfo(id, name) {
            this.$store.state.title = name;
            this.$router.push({
                path: "/homeinfo",
                query: {
                    id,
                    name,
                }
            })
        }
    },
    filters: {
        getOnline(text) {
            if (text < 10000) {
                return text;
            } else {
                return (text / 10000).toFixed(2) + "万"
            }
           
        }
    }
}
</script>

<style lang="less" scoped>
.room{
    width:320px;
    .imgbox {
            width: 320px;
            border-radius: 5px;
            height: 180px;
            overflow: hidden;
            position: relative;
            .tip {
                width: 100%;
                padding: 5px 10px;
                position: absolute;
                bottom:0;
                left:0;
                background: rgba(11, 11, 11, 0.4);
                color: #fff;
                font-size: 13px;
                display: flex;
                justify-content: space-between;
    
    
            }
    
            img {
                width: 100%;
                border-radius: 5px;
            }
    
            img:hover {
                transform: scale(1.1);
                transition: 0.3s;
            }
    
    
    
        }
    .footer{
        font-size:13px;
        color:#444;
        padding:10px 0 20px;
    }
        
    
}
</style>