<template>
    <view>
        <slot name="header" :title="title"></slot>
        我是另一个two组件
        <button @click="sendTitle">向兄弟组件发送信息</button>
        <slot></slot>
        <slot name="footer"></slot>
    </view>
</template>

<script>
    import bus from '../bus'
    export default {
        name:"two",
        data() {
            return {
                title:"two组件中的标题--好好学习呀"
            };
        },
        methods:{
            sendTitle(){
                bus.$emit("gettitle",this.title)
            }
        }
    }
</script>

<style scoped> 
view{
    width:100%;
    height:200rpx;
    background: blue;
}
</style>