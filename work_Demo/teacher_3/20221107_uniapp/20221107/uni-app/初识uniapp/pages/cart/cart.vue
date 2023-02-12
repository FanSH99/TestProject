<template>
    <view>
        购物车
        <mychild ></mychild>
    </view>
</template>

<script>
    import mychild from '../../components/mychild.vue'
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        components:{
            mychild,
        },
        // 生命周期和微信小程序的一样，
        onLoad(){
            console.log("页面加载")
        },
        onShow(){
            console.log("页面显示");
        },
        onReady(){
            console.log("页面渲染完成");
        },
        onHide(){
            console.log("页面隐藏");
        },
    }
</script>

<style>

</style>
