<template>
  <div>
    <div id="myEditor"></div>
  </div>
</template>
<script lang='ts' setup>
import {onMounted, ref} from 'vue';
// 引入wangeditor
import E from 'wangeditor';
let myEditor = ref();
onMounted(() => {
    // 组件渲染之后创建富文本编辑器实例
    let mye = new E("#myEditor");
    //设置上传图片的形式为base64
    mye.config.uploadImgShowBase64 = true;
    // 创建富五本编辑器
    mye.create();
    myEditor.value = mye;

})
// let get = ()=>{
//  console.log(   myEditor.value.txt.html() );
  
// }

defineExpose({
    myEditor
})
</script>
<style scoped>
#myEditor{
    width: 100%;
}
</style>