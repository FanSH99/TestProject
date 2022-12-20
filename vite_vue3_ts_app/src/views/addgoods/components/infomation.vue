<template>
    <div class="form">
        <el-form label-position="top" label-width="100px" ref="formRef" :model="formLabelAlign"
            style="width: 100%;height:600px" :rules="rules">
            <el-form-item label="商品名称" prop="goods_name">
                <el-input v-model="formLabelAlign.goods_name" />
            </el-form-item>
            <el-form-item label="商品价格" prop="goods_price">
                <el-input v-model="formLabelAlign.goods_price" />
            </el-form-item>

            <el-form-item label="商品重量" prop="goods_weight">
                <el-input v-model="formLabelAlign.goods_weight" />
            </el-form-item>
            <el-form-item label="商品库存" prop="goods_number">
                <el-input v-model="formLabelAlign.goods_number" />
            </el-form-item>
            <el-form-item label="商品分类" prop="goods_cat">
                <!-- <el-input v-model="formLabelAlign.goods_cat" /> -->
                <el-cascader v-model="formLabelAlign.goods_cat" :options="options" clearable :props="props"
                    @change="cateChange" />
            </el-form-item>

        </el-form>
    </div>
</template>
<script lang='ts' setup>
import { reactive, ref } from 'vue';
import { getCateList } from '../../../api/goods'
import { showMessage } from '../../../utils/showMessage';
import bus from '../../../utils/bus';
// 表格信息内容
let formLabelAlign = reactive({
    goods_name: "",
    goods_price: "",
    goods_number: "",
    goods_weight: "",
    goods_cat: [],
})

// 定义验证规则
let rules = reactive({
    goods_name: {
        required: true,
        message: "请您输入商品名称",
        trigger: 'blur',
    },
    goods_price: {
        required: true,
        message: "请您输入商品价格",
        trigger: 'blur',
    },
    goods_number: {
        required: true,
        message: "请您输入商品数量",
        trigger: 'blur',
    },
    goods_weight: {
        required: true,
        message: "请您输入商品重量",
        trigger: 'blur',
    },
    goods_cat: {
        required: true,
        message: "请您选择商品分类",
        trigger: 'blur',
    }
})

// 联机选择数据列表
let options = ref([])
let props = {
    label: 'cat_name',
    children: 'children',
    // value绑定id必须的，否则，会出现获取的数据undefined，之前就因为这个原因报错，不能进行到下一步分类参数里。
    value: "cat_id"
}

let cateList = async () => {
    let res = await getCateList();
    // console.log(res);
    if (res.data.meta.status != 200) {
        showMessage(res.data.meta.msg, "error");
        return;
    }
    options.value = res.data.data;
}
cateList();

let cateChange = (value: Array<number>) => {
    if (value.length < 3) {
        showMessage("分类必须为三级分类", 'error');
        formLabelAlign.goods_cat = [];
        return;
    }
    // console.log(value);
    // 获取三级分类id
    let id: number = value[2];
    // console.log(id);
    // 为params兄弟组件发送自定义事件,发送三级id
    bus.emit('sendid', id);

}
let formRef = ref();
defineExpose({
    formRef,
    formLabelAlign,
})
</script>
<style  scoped>
.form {
    height: 400px;
}
</style>