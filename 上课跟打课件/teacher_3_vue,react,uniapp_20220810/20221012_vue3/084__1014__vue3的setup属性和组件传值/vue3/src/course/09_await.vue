<template>
    <div>
        <h1>我是一个有异步任务的组件</h1>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
// setup的顶层是async 函数，所以可以直接await使用
// 2022年10月14日14:39:43
function getTime(): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1111)
        }, 2000)
    })
}
let res = await getTime();
console.log(res);
console.log("执行完毕");


</script>
<style lang='less' scoped>

</style>