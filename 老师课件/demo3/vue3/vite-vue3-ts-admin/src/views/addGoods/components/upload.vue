<template>
  <div>
    <el-upload  :http-request="uploadImg" list-type="picture">
    <el-button type="primary">上传商品图片</el-button>
  </el-upload>
  </div>
</template>
<script lang='ts' setup>
import {UploadRequestOptions } from 'element-plus/es/components/upload/src/upload';
import {uploadGoodsImg} from '../../../api/goods'
import {ref} from 'vue'
let uploadurl = ref("");
let uploadImg =async (options:UploadRequestOptions)=>{
    // 数据流上传
   let data:FormData = new FormData();
    // 获取文件对象信息
   let file = options.file;
   data.append("file",file);
    let res = await uploadGoodsImg(data);
    uploadurl.value = res.data.data.tmp_path;
}

defineExpose({
    uploadurl
})

</script>
<style scoped lang='less'>
</style>