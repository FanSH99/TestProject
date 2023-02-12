<template>
  <div>
    <h1>我的 {{$store.state.num}}</h1>
    <button @click="add">调用Actions</button>
    <button @click="changeNav">nav</button>
    <h3>总价:{{$store.getters.getSum}}</h3>
    <h3>{{getSum}}</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    methods: {
        add() {
            this.$store.dispatch("addNum",20)
        },
        // thischangeNav,相当于执行this.$store.state.changeNav
        ...mapActions([
            "changeNav"
        ])
    },
    computed: {
        ...mapGetters([
            "getSum"
        ])
    }
}
</script>

<style>

</style>