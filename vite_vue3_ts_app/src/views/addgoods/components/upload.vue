<template>
    <div>
        <el-upload class="upload-demo" :http-request="uploadImg" list-type="picture">
            <el-button type="primary">上传商品图片</el-button>
        </el-upload>
    </div>
</template>
<script lang='ts' setup>
import { UploadRequestOptions } from 'element-plus/es/components/upload/src/upload';
import { ref } from 'vue';
import { uploadGoodsImg } from '../../../api/goods'
import { showMessage } from '../../../utils/showMessage';
let uploadUrl = ref("");
let uploadImg = async (options: UploadRequestOptions) => {
    console.log(11111);

    let data: FormData = new FormData();
    let file = options.file;
    data.append('file', file);
    let res = await uploadGoodsImg(data);
    console.log(res);
    if (res.data.meta.status != 200) {
        showMessage(res.data.meta.msg, "error");
        return;
    }
    showMessage("上传成功", 'success')
    uploadUrl.value = res.data.data.tem_path;
}

defineExpose({
    uploadUrl
})

</script>
<style lang='less' scoped>

</style>