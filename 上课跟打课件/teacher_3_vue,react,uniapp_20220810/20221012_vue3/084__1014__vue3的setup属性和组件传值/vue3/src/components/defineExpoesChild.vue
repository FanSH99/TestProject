<template>
    <div>
        <h1>我是一个子组件</h1>
    </div>
</template>
<script lang='ts' setup>
// setup属性默认不会给任意组件暴露任意属性，所以父组件等不能直接获得本组件的标签内容及数据等。
import { ref } from 'vue';
let num = ref(100)

let init = () => {
    console.log("我被调用了");

}
let msg = "红红火火恍恍惚惚"
// 將当前组件中指定的属性或方法暴露给其他组件。
defineExpose({
    num,
    init,
    msg
})
</script>
<style lang='less' scoped>

</style>