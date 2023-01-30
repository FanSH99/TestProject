<template>
    <div>
        <one-component />
        <two-component />

    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';
import oneComponent from '@/components/brother/oneComponent.vue';
import twoComponent from '@/components/brother/twoComponent.vue';

export default defineComponent({
    setup() {

    },
    components: {
        oneComponent,
        twoComponent
    }
})
</script>
<style>

</style>