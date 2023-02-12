<template>
    <div>
        <h1>子组件向父组件传值</h1>
        {{mymsg}}
        <my-child @sendmsg="getMsg" />

    </div>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue'
import myChild from '@/components/05child.vue'
export default defineComponent({
    setup() {
        let mymsg = ref("")
        function getMsg<T>(data: T) {
            console.log(data);
            console.log(data.value);
            mymsg.value = data.value;
        }
        return {
            getMsg,
            mymsg,
        }
    },
    data() {
        return {

        }
    },
    components: {
        myChild
    }
})
</script>
<style>

</style>