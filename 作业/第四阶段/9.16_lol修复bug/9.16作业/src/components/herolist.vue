<template>
<div class="heroList">
    <div v-for="(item,index) in list" :key="index" @click="goInfo(item.heroId)">
        <img :src="`https://game.gtimg.cn/images/lol/act/img/champion/${item.alias}.png`" alt="">
        <p>{{item.title}}</p>
    </div>
</div>
</template>
<script>
export default {
            data() {
            return {
                active: 0,
                list: [],
            }
        },
        methods: {
            goInfo(id) {
                this.$router.push({
                    path: "/info/" + id
                })
            },
        },
        created() {
            let xhr = new XMLHttpRequest();
            xhr.open("get", "https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js");
            xhr.send();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    let res = JSON.parse(xhr.response);
                    // console.log(res)
                    this.list = res.hero;
                }
            }
        },
    }

</script>
<style>
.heroList {
             margin-top: 30px;
             display: flex;
             flex-wrap: wrap;
             text-align: center;
         }
    
         .heroList div {
             margin-right: 10px;
         }
</style>