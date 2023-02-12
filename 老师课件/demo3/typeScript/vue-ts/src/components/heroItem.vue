<template>
  <div class="item">
        <img :src="`https://game.gtimg.cn/images/lol/act/img/champion/${hero.alias}.png`" alt="">
        <p>{{hero.title}}</p>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props:['hero'],
    data(){
        return{

        }
    },
    methods:{

    }
})
</script>
<style scoped>
.item{
    width: 120px;
    text-align: center;
}
p{
    margin-bottom: 5px;
    font-size: 14px;
}
img{
    width: 100%;
}
</style>