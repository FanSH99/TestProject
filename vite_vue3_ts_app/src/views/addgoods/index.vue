<template>
    <div class="addGoods">
        <el-alert title="添加商品信息" type="success" />
        <div class="step">
            <el-steps :space="200" :active="active" finish-status="success">
                <el-step title="基本信息" />
                <el-step title="商品参数" />
                <el-step title="商品属性" />
                <el-step title="商品图片" />
                <el-step title="商品内容" />
                <el-step title="完成" />
            </el-steps>
        </div>
        <div class="tab">
            <el-tabs tab-position="left" class="demo-tabs" @tab-change="tabChange" v-model="activeName"
                :before-leave="beforeLeave">
                <el-tab-pane label="基本信息" name="information">
                    <infomation ref="informtionRef" />
                </el-tab-pane>
                <el-tab-pane label="商品参数" name="params">
                    <params ref="paramsRef" />
                </el-tab-pane>
                <el-tab-pane label="商品属性" name="attr">
                    <attr ref="attrRef" />
                </el-tab-pane>
                <el-tab-pane label="商品图片" name="img">
                    <upload ref="uploadRef" />
                </el-tab-pane>
                <el-tab-pane label="商品内容" name="content">
                    <weditor ref="editorRef" />
                    <div class="addbtn">
                        <el-button type="primary" @click="add">确认添加</el-button>
                    </div>
                </el-tab-pane>

            </el-tabs>

        </div>
    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import infomation from './components/infomation.vue'
import params from './components/params.vue'
import attr from './components/attr.vue'
import upload from './components/upload.vue'
import weditor from './components/weidtor.vue'
import { addGoods } from '../../api/goods'
import { showMessage } from '../../utils/showMessage';
import router from '../../router';
let active = ref(0);
let activeName = ref('information')
let tabChange = (name: any) => {
    // console.log("tab改变了", name);
    switch (name) {
        case "information":
            active.value = 0;
            break;
        case "params":
            active.value = 1;
            break;
        case "attr":
            active.value = 2;
            break;
        case "img":
            active.value = 3;
            break;
        case "content":
            active.value = 4
    }
}

let informtionRef = ref();
let editorRef = ref();
let uploadRef = ref();
let paramsRef = ref();
let attrRef = ref();
let beforeLeave = () => {
    // 表单校验
    // console.log(informtionRef.value.formRef);
    let isTrue = informtionRef.value.formRef.validate((isValide: boolean) => {
        return isValide
    })
    return isTrue;
}

let add = async () => {
    console.log(informtionRef);
    let goodsInfo = informtionRef.value.formLabelAlign;
    console.log(goodsInfo);
    // 获取描述内容，即富文本编辑器内容，
    let content: string = editorRef.value.myEidtor.txt.html();
    // 获取图片临时路径
    let url = uploadRef.value.uploadUrl;
    // 获取商品参数
    let paramsList = paramsRef.value.paramsList;
    let attrList = attrRef.value.attrList;
    let attrs: Array<Attrs> = [];
    paramsList.forEach((item: any) => {
        item.attr_vals = item.attr_vals.join(" ");
        let obj = {
            attr_id: item.attr_id,
            attr_value: item.attr_vals
        }
        attrs.push(obj);
    })
    attrList.forEach((item: any) => {
        let obj = {
            attr_id: item.attr_id,
            attr_value: item.attr_vals
        }
        attrs.push(obj)
    })

    let data: AddGoodsData = {
        goods_name: goodsInfo.goods_name,
        goods_number: goodsInfo.goods_number,
        goods_price: goodsInfo.goods_price,
        goods_weight: goodsInfo.goods_weight,
        goods_cat: goodsInfo.goods_cat.join(","),
        goods_introduce: content,
        pics: [
            { "pic": url }
        ],
        attrs: attrs
    }
    console.log(data);

    let res = await addGoods(data);
    console.log(res);

    if (res.data.meta.status != 201) {
        showMessage(res.data.meta.msg, "error");
        return;
    }
    showMessage(res.data.meta.msg, "success");
    router.push({
        path: "/goods"
    })
}
</script>
<style scoped>
.addGoods {
    width: 100%;
    min-height: 500px;
    padding: 10px;
    background: #fff;
    border-radius: 10px;
}

.step {
    width: 80%;
    margin: 10px auto;
}

.tab {
    width: 100%;
}

.addbtn {
    margin-top: 10px;
}
</style>