<template>
  <div class="params">
    <el-alert title="只允许为三级分类设计属性" type="success" />
    <div class="seltig">
      <span>请选择分类</span>
      <el-cascader v-model="cate" :options="options" clearable :props="props" @change="handerChange" />
    </div>
    <div>
      <el-tabs v-model="activeName">
        <el-tab-pane v-for="(item, index) in tabList" :key="index" :label="item.label" :name="item.name">
          <tableCom :sel="item.name" :cate_id="cart_id" />

        </el-tab-pane>

      </el-tabs>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref, reactive } from 'vue';
import { showMessage } from '../../utils/showMessage';
import tableCom from './components/table.vue'
import { getCateList } from '../../api/goods'
let cate = ref([]);
let options = ref([]);
let props = reactive({
  label: "cat_name",
  children: "children",
  value: "cat_id",
});

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
// 三级分类id
let cart_id = ref()
let handerChange = (value: Array<number>) => {
  if (value.length < 3) {
    showMessage("分类必须为三级分类", "error");
    cate.value = [];
    cart_id.value = '';
    return
  }
  cart_id.value = value[2]
}

let activeName = ref("many");
// 定义参数属性列表。
let tabList = ref([
  {
    label: "动态参数",
    name: "many",
  },
  {
    label: "静态属性",
    name: "only",
  }
])


</script>

<style  scoped>
.params {
  width: 100%;
  /* height: 100%; */
  min-height: 500px;
  border-radius: 10px;
  background: #fff;
  padding: 10px;
}

.seltig {
  margin: 10px 0;
}
</style>