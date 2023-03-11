<template>
    <div v-if="info">
        <div>
            <img :src="info.skins[0].mainImg" alt="">
        </div>
        <div style="padding: 5px;">
            <div v-for="(item,index) in info.spells" :key="index">
                <img :src="item.abilityIconPath" alt="" class="skins">
                <h4>
                    {{item.name}}
                </h4>
                <p>{{item.description}}</p>
            </div>
        </div>
    </div>
</template>
<script lang='ts'>
import Vue from 'vue';
import request from '@/utils/request'
export default Vue.extend({
    data() {
        return {
            info: null,
        };
    },
    async created() {
        // 清空数据，重新渲染
        this.info = null;
        let id = this.$route.params.id;
        console.log(id)
        let res = await request(`//game.gtimg.cn/images/lol/act/img/js/hero/${id}.js`, "GET", {});
        console.log(res);
        this.info = res.data;

    }
})
</script>
<style>

</style>