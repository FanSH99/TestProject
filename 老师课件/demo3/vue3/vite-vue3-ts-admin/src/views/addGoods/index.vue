<template>
    <div class="addGoods">
        <div>
            <el-alert title="添加商品信息" type="success" show-icon />
        </div>
        <div class="step">
            <el-steps :active="active" finish-status="success">
                <el-step title="基本信息" />
                <el-step title="商品参数" />
                <el-step title="商品属性" />
                <el-step title="商品图片" />
                <el-step title="商品内容" />
                <el-step title="完成" />
            </el-steps>
        </div>
        <div>
            <el-tabs tab-position="left" v-model="activeName" :before-leave="beforeLeave"> 
                <el-tab-pane label="基本信息" name="information">
                    <infromation ref="infromationRef"></infromation>
                </el-tab-pane>
                <el-tab-pane label="商品参数" name="params">
                    <Params ref="paramsRef"></Params>
                </el-tab-pane>
                <el-tab-pane label="商品属性" name="attr">
                    <goodsAttr ref="AttrRef"></goodsAttr>
                </el-tab-pane>
                <el-tab-pane label="商品图片" name="img">
                    <uploadImg ref="uploadRef"></uploadImg>
                </el-tab-pane>
                <el-tab-pane label="商品内容" name="content">
                    <wangEditor ref="wangRef"></wangEditor>
                    <br>
                    <el-button type="primary" @click="confirmAdd">确认添加</el-button>  
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script lang='ts' setup>
import infromation from './components/infomation.vue'
import Params from './components/params.vue'
import goodsAttr from './components/goodsAttr.vue'
import uploadImg from './components/upload.vue'
import wangEditor from './components/wangEditor.vue'
import {addGoods} from '../../api/goods'
import { ref } from 'vue';
import showMessage from '../../utils/showMessage'
import {useRouter} from 'vue-router'
let router = useRouter();
let active = ref(0)
let activeName = ref("information")
let infromationRef = ref()
let wangRef = ref();
let uploadRef = ref();
let paramsRef = ref();
let AttrRef = ref();
let beforeLeave = (activeName:string)=>{
    console.log(activeName)
    //表单校验 
    // console.log(infromationRef.value.fromRef)
    let isTrue = infromationRef.value.fromRef.validate((isVal:boolean)=>{
        return isVal
    })
    isTrue.then((res:boolean)=>{
        if(res){
            switch(activeName){
        case "information":
        active.value = 0;
        break;
        case "params":
            active.value =1;
            break;
        case 'attr':
            active.value = 2;
            break;
        case 'img':
            active.value = 3;
            break;
        case 'content':
            active.value = 4;
            break
    }
        }
    })
    return isTrue
}

// 确认添加商品
let confirmAdd = async ()=>{
    let goodsInfo = infromationRef.value.goosInfo;
    // 获取富文本编辑器内容
    let content:string = wangRef.value.myEditor.txt.html();
    // 获取上传图片成功后的临时路径
    let url = uploadRef.value.uploadurl;
    // 获取当前商品商品参数
    let paramsList = paramsRef.value.paramsList;
    let attrs:Array<Attrs> = [];
    paramsList.forEach((item:any)=>{
        item.attr_vals = item.attr_vals.join(' ')
        let obj = {
            attr_id:item.attr_id,
            attr_value :item.attr_vals
        }
        attrs.push(obj)
    })
    // 获取当前商品属性
    let attrList = AttrRef.value.attrList;
    attrList.forEach((item:any)=>{
        let obj = {
            attr_id:item.attr_id,
            attr_value :item.attr_vals
        }
        attrs.push(obj)
    })
    let data:AddGoodsData = {
        goods_name:goodsInfo.goods_name,
        goods_number:goodsInfo.goods_number,
        goods_price:goodsInfo.goods_price,
        goods_weight:goodsInfo.goods_weight,
        goods_cat:goodsInfo.goods_cat.join(","),
        goods_introduce:content,
        // pics:[
        //     {"pic":url}
        // ],
        attrs:attrs
    }
    let res = await addGoods(data);
    console.log(res)
    if(res.data.meta.status !==201){
        showMessage(res.data.meta.msg,"error")
        return
    }
    showMessage("添加商品成功","success");
    router.push({
        path:"/goods"
    })
}   
</script>
<style scoped>
.addGoods {
    width: 100%;
    min-height: 500px;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
}

.step {
    width: 80%;
    margin: 10px auto;
}
</style>