<template>
    <div class="child">
        {{msg}}
        <one></one>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                msg:"我是子组件"
            }
        },
    }
</script>
<style>
    .child{
        width: 500px;
        height: 300px;
        background: red;
        color: #fff;
    }
</style>