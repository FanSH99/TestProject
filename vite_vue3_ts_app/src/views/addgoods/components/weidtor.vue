<template>
    <div>
        <div id="myEidtor"></div>
        <!-- <button @click="get">获取编辑器内容</button> -->
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from 'vue';

import Editor from 'wangeditor';
let myEidtor = ref();
onMounted(() => {
    // 组件渲染之后创建富文本编辑器实例
    let myE = new Editor("#myEidtor");
    // console.log(myEidtor);
    // 设置上传图片为base64
    myE.config.uploadImgShowBase64 = true;
    // 创建富文本编辑器
    myE.create();
    myEidtor.value = myE;
})

let get = () => {
    console.log('获取到富文本编辑器内容');
    // console.log(myEidtor);
    console.log(myEidtor.value.txt.html());
}
defineExpose({
    myEidtor
})
</script>
<style  scoped>
#myEidtor {
    width: 100%;
}
</style>