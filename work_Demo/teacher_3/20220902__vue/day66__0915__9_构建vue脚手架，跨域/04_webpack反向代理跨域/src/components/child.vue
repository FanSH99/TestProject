<template>
    <div class="child">
        <p>{{msg}}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: "我是子组件"
        }
    }
};
</script>
<style>
    .child{
        width:200px;
        height:200px;
        background:#69b1b1;
        color:#fff
    }
    
</style>