<template>
  <div class="params">
    <div>
      <el-alert title="只允许为三级分类设置属性！！！" type="success" show-icon />
    </div>
    <div class="example-block">
      <span class="example-demonstration">选择分类: </span>
      <el-cascader v-model="catList" :options="options" @change="handleChange" :props='props' placeholder="请选择分类" />
    </div>
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane v-for="(item,index) in tabList" :key="index"  :label="item.label" :name="item.name" >
      <paramsTable :sel="item.name" :cate_id="cate_id"></paramsTable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang='ts' setup>
import { getCateList } from '../../api/goods'
import { reactive, ref } from 'vue';
import showMessage from '../../utils/showMessage';
import paramsTable from './components/params-table.vue'
// 当前选中的分类列表
let catList = ref([]);
// 分类属性结构数据
let options = ref([]);
let props = reactive({
  label: "cat_name",
  value: "cat_id",
  children: "children"
})
// 定义三级分类id
let cate_id = ref()
let cateList = async () => {
  // 获取分类列表
  let res = await getCateList();
  console.log(res)
  options.value = res.data.data;

}
cateList();
let handleChange = (value: Array<number>) => {
  if (value.length < 3) {
    showMessage("分类必须为三级分类！", "error")
    catList.value = [];
    cate_id.value = "";
    return
  }
  cate_id.value = value[2]
}
// 定义参数属性列表
let tabList = ref([
  {
    label:"动态属性",
    name:"many"
  },{
    label:"静态参数",
    name:"only"
  }
])
let activeName = ref("many")
</script>
<style scoped>
.example-block {
  background-color: #fff;
  padding: 10px 0;
}

.params {
  width: 100%;
  min-height: 500px;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
}
</style>