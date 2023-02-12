<template>
    <div>
        <h1>我是一个组件{{$store.state.num}}</h1>
        <ul>
            <li v-for="(item,index) in getList" :key="index">{{item}}</li>
        </ul>
        
    </div>
</template>

<script>

export default {
    data() {
        return {
            
        }
    },
    created() {
        console.log(this);
        console.log(this.$store.state.num);
    },
    computed: {
        getList() {
            return this.$store.state.list
        },
       
    }

    /* 可以用$store.state.list来使用store里面的属性，也可以用计算属性来监听store的属性， */

}
</script>

<style>

</style>