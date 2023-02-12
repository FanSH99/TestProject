<template>
    <div>
        <h1>我是一个组件 {{$store.state.num}}</h1>
        <ul>
            <li v-for="(item,index) in $store.state.list" :key="index"> {{item}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: '',
    data() {
        return {

        }
    },
    created() {
        console.log(this)
        // 使用this.$store.state 获取仓库状态
        console.log(this.$store.state.num)
    }
}
</script>
<style>

</style>