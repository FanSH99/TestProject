<template>
    <view>
        详情页
        <button @click="showToast">showToast</button>
    </view>
</template>

<script>
    import request from '../../utils/request.js'
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            showToast(){
               uni.showToast({
                   title: '哈哈哈哈',
                   icon: 'none'
               });
            }
        },
       async onLoad(options){
            console.log(options.id);
            let res=await request("https://apif.java.crmeb.net/api/front/index","GET");
            console.log(res);
        }
    }
</script>

<style>

</style>

<!-- uniapp不能使用vant-ui但是可以在插件市场查找替代插件 
 uniapp经常使用的组件库是uview.-
 -->