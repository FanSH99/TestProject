<template>
    <div>
        <h1>hello vue-cli</h1>
        <h2>{{num}}</h2>
        <button @click="num++">++</button>
        <child />
        <one></one>
        <button @click="goHome">首页</button> | <button @click="goMine">我的</button>
        <router-view></router-view>
    </div>
</template>
<script>
    import child from './components/child.vue'
    export default {
        data() {
            return {
                num:0
            }
        },
        methods: {
            goHome(){
                this.$router.push({
                    path:"/"
                })
            },
            goMine(){
               console.log(this) 
               this.$router.push({
                path:"/mine",
                query:{
                    name:"张三"
                }
               })
            }
        },
        computed:{

        },
        watch:{

        },
        filters:{

        },
        directives:{

        },
        components:{
            child
        },
        created() {
            
        },
    }
</script>
<style>

</style>