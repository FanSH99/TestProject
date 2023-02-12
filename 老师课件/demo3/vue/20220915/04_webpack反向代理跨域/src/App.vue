<template>
    <div>
       
        <button @click="goHome">首页</button> | <button @click="goMine">我的</button>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {
             
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
  
    }
</script>
<style>

</style>