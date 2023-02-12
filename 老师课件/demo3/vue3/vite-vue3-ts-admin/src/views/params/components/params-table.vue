<template>
    <div>
        <div>
            <el-button type="primary" :disabled="cate_id ? false : true">{{ sel === "many" ? '添加属性' : '添加参数' }}</el-button>
        </div>
        <div class="table">
            <el-table :data="tableData" border style="width: 100%" row-key="attr_id">
                <el-table-column type="expand" width="80">
                    <template #default="props">
                        <el-tag v-for="(item, index) in props.row.attr_vals" :key="index" size="large" closable
                            class="mytag" @close="closeTag(props.row,index)">{{ item }}</el-tag>
                        <el-input v-if="props.row.isShowinput" ref="InputRef" v-model="inputValue" class="myinput"
                            @keyup.enter="handleInputConfirm(props.row)" @blur="handleInputConfirm(props.row)" />
                        <el-button v-else class="button-new-tag ml-1" @click="showInput(props.row)">
                            + New Tag
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="attr_id" label="#id" width="80" />
                <el-table-column prop="attr_name" label="参数名" width="280" />
                <el-table-column prop="address" label="操作">
                    <template #default>
                        <div>
                            <el-button type="primary" size="small" :icon="Edit">编辑</el-button>
                            <el-button type="danger" size="small" :icon="Delete">删除</el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { Edit, Delete } from '@element-plus/icons-vue'
import { ref, watch } from 'vue';
import { getCateParams ,updateParams} from '../../../api/goods'
import showMessage from '../../../utils/showMessage';
let tableData = ref([]);
let inputValue = ref("")
// 接受父组件传递的参数sel
let props = defineProps({
    sel: String,
    cate_id: Number
})
watch(() => props.cate_id, async (id) => {
    // console.log(id,"我发生改变啦")
    // 判断当前有没有分类id若有则请求对象参数若没有则清空列表
    if (id) {
        let data: Attributes = {
            sel: props.sel
        }
        let res = await getCateParams(id, data);
        res.data.data.forEach((item: any) => {
            item.attr_vals = item.attr_vals.split(" ")
            // 给没一个属性对象中添加一个新属性就是用来控制 输入框显示与隐藏
            item.isShowinput = false;
        })
        tableData.value = res.data.data;
    } else {
        tableData.value = [];
    }
})
// 确定添加
let handleInputConfirm = async (row:any)=>{
    let cate_id = props.cate_id;
    let attrId = row.attr_id;
    if(!inputValue.value){
        showMessage("请您填写参数",'warning');
        row.isShowinput = false
        return
    }
    row.attr_vals.push(inputValue.value)
    let data:UpdateParams  = {
        attr_name:row.attr_name,
        attr_sel:row.attr_sel,
        attr_vals:row.attr_vals.join(" ")
    }
    let res = await updateParams(cate_id,attrId,data);
    // console.log(res)
    showMessage("添加成功","success")
    inputValue.value  = "";
    row.isShowinput = false
}   
let showInput = (row:any)=>{
    row.isShowinput = true
}
let closeTag = async (row:any,index:number)=>{
    row.attr_vals.splice(index,1);
    let cate_id = props.cate_id;
    let attrId = row.attr_id;
    let data:UpdateParams  = {
        attr_name:row.attr_name,
        attr_sel:row.attr_sel,
        attr_vals:row.attr_vals.join(" ")
    }
    let res = await updateParams(cate_id,attrId,data);
    // console.log(res)
    showMessage("删除成功","success")
}
</script>
<style scoped>
.mytag,.button-new-tag{
    margin-left: 10px;
}
.myinput{
    width: 120px;
    margin-left: 10px;
}
</style>