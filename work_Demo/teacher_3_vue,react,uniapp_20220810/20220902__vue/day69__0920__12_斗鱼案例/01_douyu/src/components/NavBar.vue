<template>
  <div class="nav">
    <div><i class="fa fa-bars fa-lg" @click="changeSlider"></i>&nbsp;<slot></slot></div>
    <div><i class="fa fa-user-o fa-lg"></i></div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';


export default {
    data() {
        return {
            
        }
    },
    methods: {
            ...mapMutations([
                "changeSlider"
            ])
        
        
    }
}
</script>

<!-- less是一种css编程语言。
    scoped表示当前css样式之作用与当前组件。 -->
<style lang="less" scoped>
    @navHeight:50px;
    .nav{
        width:100%;
        height: @navHeight;
        line-height: @navHeight;
        background: #333;
        color:#fff;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        font-size: 16px;
    }
</style>