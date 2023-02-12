<template>
  <div>
    <el-form
    label-position="top"
    label-width="100px"
    :model="goosInfo"
    :rules="rules"
    ref="fromRef"
  >
  <el-form-item label="商品名称" prop="goods_name">
      <el-input v-model="goosInfo.goods_name" />
    </el-form-item>
    <el-form-item label="商品价格" prop="goods_price">
      <el-input v-model="goosInfo.goods_price" />
    </el-form-item>
    <el-form-item label="商品重量" prop="goods_weight">
      <el-input v-model="goosInfo.goods_weight" />
    </el-form-item>
    <el-form-item label="商品库存" prop="goods_number">
      <el-input v-model="goosInfo.goods_number" />
    </el-form-item>
    <el-form-item label="商品分类" prop="goods_cat">
        <el-cascader v-model="goosInfo.goods_cat" :options="options" :props='porps' placeholder="请选择分类" @change="catChange"/>
    </el-form-item>
  </el-form>
  </div>
</template>
<script lang='ts' setup>
import bus from '../../../utils/bus'
import {getCateList} from '../../../api/goods'
import { reactive,ref} from 'vue';
import showMessage from '../../../utils/showMessage';
let goosInfo = reactive({
    goods_name:"",
    goods_price:"",
    goods_number:"",
    goods_weight:"",
    goods_cat:[]
})
let rules = reactive({
    goods_name:{required: true, message: '请您输入商品名称',trigger: 'blur'},
    goods_price:{required: true, message: '请您输入商品价格',trigger: 'blur'},
    goods_number:{required: true, message: '请您输入商品数量',trigger: 'blur'},
    goods_weight:{required: true, message: '请您输入商品重量',trigger: 'blur'},
    goods_cat:{required: true, message: '请您选择商品分类',trigger: 'blur'}
})

let fromRef = ref();
// 联级选择数据列表
let options = ref([])

let porps = {
    label:"cat_name",
    children:"children",
    value:"cat_id"
}
// 获取分类列表
let getList = async ()=>{
    let res = await getCateList();
    console.log(res)
    options.value = res.data.data;
}
getList();
let catChange = (value:Array<number>)=>{
    // console.log(value)
    if(value.length<3){
        showMessage("分类必须为三级分类！",'error');
        goosInfo.goods_cat = [];
        return
    }
    // 获取三级分类id
    let id:number = value[2];
    // 向paramas组件发送自定义事件
    bus.emit("sendid",id);
}

// 将from对象暴露给父组件
defineExpose({
    fromRef,
    goosInfo
})
</script>
<style scoped lang='less'>
</style>