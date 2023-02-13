<template>
    <div class="main">
        <div class="left">
            <leftVue />
        </div>
        <div class="center">
            <dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" />
        </div>
        <div class="right">
            <rightVue />
        </div>

    </div>
</template>
<script>
import leftVue from './left.vue';
import rightVue from './right.vue';
import mapconfig from '@/utils/map'
export default {
    name: '',
    data() {
        return {
            config: mapconfig,
        }
    },
    components: {
        leftVue,
        rightVue,
    }
}
</script>
<style lang='less' scoped>
.main {
    display: flex;
    color: #fff;
    .left,
    .right {
        flex: 3
    }

    .center {
        flex: 4,
    }
}
</style>