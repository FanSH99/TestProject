<template>
    <div>
        <h1>我是一个子组件</h1>
        <p v-for="(item,index) in list" :key="index">{{item.name}}--{{item.msg}}</p>
    </div>
</template>
<script lang='ts' setup>
import { ref, watch } from 'vue';

// defineProps接收父组件传递过来的信息。
let props = defineProps({
    myname: String,
    obj: Object,
})
let list = ref([
    {
        name: "小青",
        msg: "花开开谢终有时",
    },
    {
        name: "风来",
        msg: "等风来",
    }
])

console.log(props.obj);

watch(props.obj, () => {
    list.value.push(props.obj);
    console.log(list);
})
// watch(props.msg, () => {
//     list.value.push(props.msg)
// }


</script>
<style lang='less' scoped>

</style>