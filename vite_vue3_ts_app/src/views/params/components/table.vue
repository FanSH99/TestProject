<template>
    <div>
        <el-button type="primary" :disabled="cate_id ? false : true">{{ sel == "only" ? '添加属性' : '添加参数' }}</el-button>
        <el-table :data="tableData" style="width: 100%" row-key="attr_id">
            <el-table-column type="expand">
                <template #default="props">

                    <el-tag v-for="(item, index) in props.row.attr_vals" :key="index" size="large" closable
                        class="mytag" @close="closeTag(props.row, index)">{{ item }}</el-tag>

                    <el-input v-if="props.row.isShowinput" ref="InputRef" v-model="inputValue" class="myinput"
                        @keyup.enter="handleInputConfirm(props.row)" @blur="handleInputConfirm(props.row)" />
                    <el-button v-else class="button-new-tag ml-1" @click="showInput(props.row)">
                        + New Tag
                    </el-button>

                </template>
            </el-table-column>
            <el-table-column prop="attr_id" label="#id" width="100" />
            <el-table-column prop="attr_name" label="参数名" width="200" />
            <el-table-column label="操作">
                <template #default>
                    <div>
                        <el-button type="primary" size="small" :icon="Edit">编辑</el-button>
                        <el-button type="primary" size="small" :icon="Delete">删除</el-button>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script lang='ts' setup>
import { ref, watch } from 'vue';
import { Edit, Delete, } from '@element-plus/icons-vue'
import { getCateParams } from "../../../api/goods"
import { updateParams } from '../../../api/params'
import { numberLiteralTypeAnnotation } from '@babel/types';
import { showMessage } from '../../../utils/showMessage';

let tableData = ref([]);
let props = defineProps({
    sel: String,
    cate_id: Number,
})

watch(() => props.cate_id, async (id) => {
    if (id) {
        let data: AttrData = {
            sel: props.sel
        }
        let res = await getCateParams(id, data);
        // console.log(res);
        tableData.value = res.data.data;
        res.data.data.forEach((item: any) => {
            item.isShowinput = false;
            let type = item.attr_vals.indexOf(",")
            if (type == -1) {
                item.attr_vals = item.attr_vals.split(" ");
            } else {
                item.attr_vals = item.attr_vals.split(",");
            }
        });
    } else {
        tableData.value = [];
    }
})

// let inputVisible = ref(false);
let inputValue = ref("");
let handleInputConfirm = async (row: any) => {
    let cate_id = props.cate_id;
    let attrId = row.attr_id;
    if (!inputValue.value) {
        showMessage("请您填写参数", 'warning');
        row.isShowinput = false
        return
    }
    row.attr_vals.push(inputValue.value)
    let data: ParamsData = {
        attr_name: row.attr_name,
        attr_sel: row.attr_sel,
        attr_vals: row.attr_vals.join(" ")
    }
    let res = await updateParams(cate_id, attrId, data);
    console.log(res);
    if (res.data.meta.status != 200) {
        showMessage(res.data.meta.msg, "error");
        return;
    }
    showMessage("添加成功", "success")
    inputValue.value = ''

}

let showInput = (row: any) => {
    // inputVisible.value = true;
    row.isShowinput = true;
}

let closeTag = async (row: any, index: number) => {
    row.attr_vals.splice(index, 1);
    let cate_id = props.cate_id;
    let attrId = row.attr_id;
    let data: ParamsData = {
        attr_name: row.attr_name,
        attr_sel: row.attr_sel,
        attr_vals: row.attr_vals.join(" ")
    }
    let res = await updateParams(cate_id, attrId, data);
    // console.log(res)
    if (res.data.meta.status != 200) {
        showMessage(res.data.meta.msg, "error");
        return;
    }
    showMessage("删除成功", "success")
}



</script>
<style scoped>
.mytag,
.button-new-tag {
    margin-right: 10px;
    /* margin-bottom: 10px; */
}

.myinput {
    width: 100px;
    margin-right: 10px;
}
</style>