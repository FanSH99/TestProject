<template>
    <div class="cate">
        <div class="btn">
            <a-button type="primary">添加分类</a-button>
        </div>
        <div class="table">

            <a-table :columns="columns" :data-source="dataSource" bordered :pagination="false">

                <template #bodyCell="{ column, text }">

                    <div v-if="column.dataIndex === 'cat_deleted'">
                        <a-tag :color="text ? '#f50' : '#87d068'">{{ text ? '无效' : '有效' }}</a-tag>
                    </div>
                    <div v-if="column.dataIndex === 'cat_level'">
                        <a-tag v-show="text == 0" color="#15b5f5">一级</a-tag>
                        <a-tag v-show="text == 1" color="#f5b555">二级</a-tag>
                        <a-tag v-show="text == 2" color="#b5a5f5">三级</a-tag>
                    </div>
                </template>


            </a-table>
            <div class="paginate">
                <a-pagination :page-size="pagesize" size="small" :current="pagenum" :total="total" show-size-changer
                    show-quick-jumper :show-total="total => `Total ${total} items`" @change="onChange" />
            </div>
        </div>

    </div>
</template>
<script lang='ts' setup>

import { Button } from 'ant-design-vue'
import { ref } from 'vue'
import { showMessage } from '../../utils/showMessage';
import { getGoodsList } from '../../api/cate'

let columns = ref([
    {
        title: '分类名称',
        dataIndex: 'cat_name',
        key: 'cat_name',
    },
    {
        title: '是否有效',
        dataIndex: 'cat_deleted',
        key: 'cat_deleted',
    },
    {
        title: '排序',
        dataIndex: 'cat_level',
        key: 'cat_level',
    },
    {
        title: '操作',
        dataIndex: 'address',
        key: 'address',
    },
])

let dataSource = ref([]);
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
    dataSource.value = res.data.data.result;
    total.value = res.data.data.total;
}
getCate();
const onChange = (pageNumber: number, pageSize: number) => {
    pagenum.value = pageNumber;
    pagesize.value = pageSize;
    getCate();
};
</script>
<style  scoped>
.paginate {
    background-color: #fff;
    padding: 12px 5px;
}
</style>