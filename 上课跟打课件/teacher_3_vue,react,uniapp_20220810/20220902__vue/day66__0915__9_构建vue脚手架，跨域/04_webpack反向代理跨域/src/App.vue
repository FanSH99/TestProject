<!-- 2022年9月15日09:26:00 -->
<template>
    <div>
        <button @click="goHome">首页</button>
        <button @click="goMine">我的</button>
        <router-view></router-view>
    </div>
</template>
<script>
import child from './components/child.vue';
export default {
    data() {
        return {
            msg: "dddd",
            num:0,
        }
    },
    methods: {
        goHome() {
            this.$router.push({
                path: "/"
            });
        },
        goMine() {
            this.$router.push({
                path: "/mine",
                query: {
                    name:"白浅"
                }
            });
        }
    
    },
    computed: {
        
    },
    watch: {
        
    },
    filters: {
        
    },
   
    created() {
        
    }
}


</script>
<style>

</style>