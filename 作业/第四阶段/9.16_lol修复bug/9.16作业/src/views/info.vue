<template>
    <div v-if="info" class="info">

        <transition mode="out-in" name="bannerImg">
            <div class="banner">
                <img :src="imgList[showIdx].sourceImg" alt="">
            </div>

        </transition>

        <div class="main">
            <div class="title">
                <span><img :src="imgList[showIdx].iconImg" alt=""></span>
                <span>{{info.hero.alias}}</span>
                <span>{{info.hero.title}}</span>
                <span>{{info.hero.name}}</span>
            </div>
            <p>{{info.hero.shortBio}}</p>
            <div class="skills">
                <div v-for="(item,index) in info.spells" :class="{active:active===index}" @click="active=index"
                    :key="index">
                    <img :src="item.abilityIconPath" alt="">
                    <p>{{item.name}}</p>
                </div>

            </div>
            <skillinfo :active="active" :info="info.spells"></skillinfo>
        </div>
    </div>
</template>
<script>
import skillinfo from '../components/skillinfo.vue';
export default {
    data() {
        return {
            info: null,
            active: 0,
            imgList: [],
            showIdx: 0,
            timer: null,
        }
    },
    components: {
        skillinfo,
    },
    activated() {

        clearInterval(this.timer);
        this.timer = null;
        this.active = 0;
        this.showIdx = 0;
        this.info = null;
        this.imgList = [];
        let id = this.$route.params.id;
        let xhr = new XMLHttpRequest();
        xhr.open("get", `//game.gtimg.cn/images/lol/act/img/js/hero/${id}.js`);
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                let res = JSON.parse(xhr.response);
                // console.log(res)
                this.info = res;
                // this.imgList = res.skins;
                let imgList = res.skins;
                imgList.forEach(item => {
                    if (item.sourceImg != "") {
                        this.imgList.push(item)
                    }
                });
            }
        }
        this.timer = setInterval(() => {
            this.showIdx++;
            if (this.showIdx >= this.imgList.length) {
                this.showIdx = 0;
            }
        }, 2000)
    },

};
</script>
<style>
.info {
             width: 1200px;
             margin: 0 auto;
         }
    
         .info .banner {
             width: 100%;
             height: 250px;
             /* overflow: hidden; */
             margin-bottom: 20px;
         }
    
         .info .banner img {
             width: 100%;
             height: auto;
         }
    
         .info .main .title {
             display: flex;
             justify-content: flex-start;
             line-height: 80px;
         }
    
         .info .main .title img {
             height: 100%;
         }
    
         .info .main span {
             height: 80px;
             margin-right: 10px;
         }
    
         .info .main > p,
         .infoTig {
             text-indent: 2rem;
             line-height: 1.4;
         }
    
         .info .main img {
             border-radius: 100%;
             height: 60px;
         }
    
         .info .skills {
             display: flex;
             justify-content: space-around;
         }
    
         .info .skills > div img {
             border: 3px solid transparent;
         }
    
         .info .skills > div.active img {
             position: relative;
         }
    
         .info .skills > div.active img {
             border: 3px solid red;
         }
    
         .info .skills > div.active p {
             color: red;
             font-weight: bold;
         }
    
         .bannerImg-enter,
         .bannerImg-leave-to {
             transform: translateX(100px);
             opacity: 0;
         }
    
         .bannerImg-enter-active,
         .bannerImg-leave-active {
             transition: 0.5s;
         }
</style>