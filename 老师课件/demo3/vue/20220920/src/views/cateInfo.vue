<template>
    <div>
        <div class="info" v-if="list.length!=0">
            <room-item v-for="(item,index) in list" :key="index" :roomItem="item"></room-item>
        </div>
        <loading v-else></loading>
    </div>
</template>
<script>
import roomItem from '@/components/roomItem.vue';
export default {
    data() {
        return {
            list: []
        }
    },
    components: {
        roomItem
    },
    activated() {
        this.list = [];
        let { id } = this.$route.params;
        // 获取分类详情数据
        this.$axios.get(`/api/RoomApi/live/${id}`).then(res => {
            console.log(res)
            this.list = res.data.data;
        })
    }
}
</script>
<style scoped>
.info {
    width: 90%;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>