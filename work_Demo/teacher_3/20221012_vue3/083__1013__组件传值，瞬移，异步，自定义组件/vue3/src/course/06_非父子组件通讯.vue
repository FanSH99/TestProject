<template>
    <div>
        <h1></h1>
        <one />
        <two />

    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import one from '@/components/06_child/one.vue'
import two from '@/components/06_child/two.vue'
export default defineComponent({
    setup() {

        // 2022年10月13日14:05:21
    },
    components: {
        one,
        two,
    },
    data() {
        return {

        }
    },
})
</script>
<style lang='less' scoped>

</style>