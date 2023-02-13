<!-- 2022年9月15日09:26:00 -->
<template>
    <div>
        <h1>hello vue-cli</h1>
        <p>{{msg}}</p>
        <p>{{num}}</p>
        <button @click="num++">++</button>
        <!-- <child></child> 可以用字节数标签简写如下-->
        <child />
        <one></one>
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
    components: {
        child,
    },
    created() {
        
    }
}


</script>
<style>

</style>