<template>
    <div>
        <el-form label-position="top" label-width="100px" ref="formRef">
            <el-form-item v-for="(item, index) in attrList" :key="index" :label="item.attr_name">
                <el-input v-model="item.attr_vals" />
            </el-form-item>
        </el-form>
    </div>
    <div v-if="attrList.length == 0">
        <el-empty>没有更多属性</el-empty>
    </div>
</template>
<script lang='ts' setup>
import { Ref, ref } from 'vue';
import bus from '../../../utils/bus'
import { getCateParams } from '../../../api/goods'
import { showMessage } from '../../../utils/showMessage';
let attrList: Ref<any[]> = ref([]);
bus.on("sendid", async (id: any) => {
    // console.log(id);
    let data: AttrData = {
        sel: 'only'
    }
    let res = await getCateParams(id, data);
    // console.log(res);
    if (res.data.meta.status != 200) {
        showMessage(res.data.meta.msg, "error");
        return;
    }
    attrList.value = res.data.data;
})
defineExpose({
    attrList
})

</script>
<style lang='less' scoped>

</style>