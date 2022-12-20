<template>
    <div class="cate">
        <div class="btn">
            <el-button type="primary">添加分类</el-button>
        </div>
        <div class="table">
            <el-table :data="tableData" style="width: 100%" row-key="id">
                <el-table-column type="expand">
                    <template #default="{ row }">
                        <el-row v-for="(item, index) in row.children" :key="index">
                            <el-col :span="1" style="margin-left:16px">
                                <span>+</span>
                            </el-col>
                            <el-col :span="4">{{ item.cat_name }}</el-col>
                            <el-col :span="4">
                                <el-tag v-if="!item.cat_deleted">有效</el-tag>
                                <el-tag v-else type="danger">无效</el-tag>
                            </el-col>
                            <el-col :span="4">
                                <!-- {{ row }} -->
                                <el-tag v-if="item.cat_level == 0">一级</el-tag>
                                <el-tag v-if="item.cat_level == 1" type="success">二级</el-tag>
                                <el-tag v-if="item.cat_level == 2" type="warning">三级</el-tag>
                            </el-col>
                            <el-col :span="5">
                                <div>
                                    <el-tooltip class="box-item" effect="dark" content="编辑" placement="top">
                                        <el-button type="primary" size="small" :icon="Edit" @click="change(item)">编辑
                                        </el-button>
                                    </el-tooltip>
                                    <el-tooltip class="box-item" effect="dark" content="删除" placement="top">
                                        <el-button type="danger" size="small" :icon="Delete"
                                            @click="remove(item.goods_id)">删除
                                        </el-button>
                                    </el-tooltip>
                                </div>
                            </el-col>
                        </el-row>
                    </template>
                </el-table-column>
                <el-table-column prop="cat_name" label="分类名称" width="200">
                    <template #default="{ row }">
                        <div>
                            <!-- <el-icon class="myicon">
                                <Plus />
                            </el-icon> -->
                            <span style="margin-left: 10px">{{ row.cat_name }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="authName" label="是否有效" width="200">
                    <template #default="{ row }">
                        <div>
                            <el-tag v-if="!row.cat_deleted">有效</el-tag>
                            <el-tag v-else type="danger">无效</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="排序" width="200">
                    <template #default="{ row }">
                        <div>
                            <!-- {{ row }} -->
                            <el-tag v-if="row.cat_level == 0">一级</el-tag>
                            <el-tag v-if="row.cat_level == 1" type="success">二级</el-tag>
                            <el-tag v-if="row.cat_level == 2" type="warning">三级</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="{ row }">
                        <div>
                            <el-tooltip class="box-item" effect="dark" content="编辑" placement="top">
                                <el-button type="primary" size="small" :icon="Edit" @click="change(row)">编辑</el-button>
                            </el-tooltip>
                            <el-tooltip class="box-item" effect="dark" content="删除" placement="top">
                                <el-button type="danger" size="small" :icon="Delete" @click="remove(row.goods_id)">删除
                                </el-button>
                            </el-tooltip>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="page">
            <el-pagination v-model:page-size="pagesize" v-model:current-page="pagenum" :page-sizes="[5, 10, 15, 20]"
                :total="total" layout="total, sizes, prev, pager, next, jumper" @current-change="currentChange"
                @size-change="sizeChange" />
        </div>
    </div>
</template>
<script lang='ts' setup>
//备注：此为原先分类页面版本，已废弃。
import { ref } from 'vue';
import { Plus, Edit, Delete } from '@element-plus/icons-vue';
import { showMessage } from '../../utils/showMessage';
import { getGoodsList } from '../../api/cate'

let tableData = ref([]);

let pagesize = ref(10);
let pagenum = ref(1);
let total = ref(0);
let getCate = async () => {
    let data = {
        pagenum: pagenum.value,
        pagesize: pagesize.value,
    }
    let res = await getGoodsList(data);
    console.log(res);
    if (res.data.meta.status != 200) {
        showMessage(res.data.meta.msg, "error");
        return;
    }
    tableData.value = res.data.data.result;
    total.value = res.data.data.total;

}
getCate();
let currentChange = (value: number) => {
    // console.log(value);
    pagenum.value = value;
    getCate();

}

let sizeChange = (value: number) => {
    console.log(value);
    pagesize.value = value;
    getCate();
}


let change = (row: any) => {

}
let remove = (id: number) => {

}
</script>
<style  scoped>
.cate {
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    min-height: 300px;
}

.myicon {
    border: 1px solid #f1f1f1;
    border-radius: 3px;
    color: #222;
    padding: 2px;
}

.el-row {
    padding: 5px 0px;
}

.el-col {
    width: 180px;
}

.col1 {
    width: 160px;
}
</style>