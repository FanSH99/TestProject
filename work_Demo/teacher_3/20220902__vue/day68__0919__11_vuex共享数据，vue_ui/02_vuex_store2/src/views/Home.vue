<template>
<div>

    <h1>主页</h1>
    <p>{{num}}</p>
    <button @click="changeNum(5)">num++</button>
    <button @click="showNav">显示nav</button>
    <h1>购物车总数：{{$store.state.cart.list.length}}</h1>
</div>
</template>

<script>
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

export default {

    data() {
        return {
            
        }
    },
    // methods: {
    //     add() {
    //         this.$store.commit("changeNum");
    //     },
    // },
    computed: mapState([
        "num"
    ]),
    methods: {
        // 使用辅助函数mapMutations将mutation方法映射。
        // 相当于this.changeNum=this.$stroe.mutation.changeNum
        ...mapMutations([
            "changeNum",
            "showNav",
        ])

    }
}
</script>

<style>

</style>