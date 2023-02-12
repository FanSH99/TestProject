<template>
    <el-dialog
    v-model="dialogVisible"
    title="分配权限"
    width="50%"
    :before-close="handleClose"
  >
  <el-tree :data="data" :props="defaultProps" show-checkbox node-key='id' :default-checked-keys="defaulCheckedKeys"  :default-expanded-keys="defaultExpandedKeys" ref='treeRef'/>
  <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="confirm">确认</el-button
        >
      </span>
    </template>
    </el-dialog>
</template>
<script lang='ts' setup>
import { reactive, Ref, ref } from 'vue';
import {getRightsList,setRights} from '../../../api/roles'
import showMessage from '../../../utils/showMessage';
let dialogVisible = ref(false);
let handleClose = ()=>{
    dialogVisible.value = false
}
// 树形控件中的使用
let data =ref([]);
let defaultProps = reactive({
    label:"authName",
    children:"children"
})
//  当前角色id
let roles_id = ref(0);
// 默认选中的key 列表
let defaulCheckedKeys:Ref<number[]> = ref([])
// 默认展开的key列表
let defaultExpandedKeys:Ref<number[]>  = ref([])
// 定义初始化方法init
let init = async (children:Array<any>,id:number)=>{
    roles_id.value = id;
    // 清空默认选中和默认展开列表
    defaulCheckedKeys.value = [];
    defaultExpandedKeys.value =[];
    dialogVisible.value = true;
    // 获取所有权限列表
    let res = await getRightsList("tree");
    console.log(res)
    data.value = res.data.data;
    // 当前角色权限列表
    // console.log(children)
    children.forEach((item)=>{
        // 将一级权限id 存放到defaultExpandedKeys 中
        defaultExpandedKeys.value.push(item.id)
        // 处理二级权限id
        item.children.forEach((item1:any)=>{
                // 将二级权限id 存放到defaultExpandedKeys 中
                defaultExpandedKeys.value.push(item1.id);
        // 处理三级权限id
                item1.children.forEach((item2:any)=>{
                    // 三级权限id存放到默认选中列表中 defaulCheckedKeys
                    defaulCheckedKeys.value.push(item2.id)
                })
        })
    })
}
defineExpose({
    init
})
let emit = defineEmits(["over"])
// tree组件实例
let treeRef = ref();
// 确认分配权限
let confirm = async ()=>{
//   roles_id.value
//  console.log(treeRef)
//  获取全选中权限id;
let checkedAllKey:Array<number> = treeRef.value.getCheckedKeys();
// console.log(checkedAllKey)
//  获取半选中的权限id
let halfCheckedKey:Array<number> = treeRef.value.getHalfCheckedKeys();
// console.log(halfCheckedKey)
// 将半选中全选中的权限id合并到同一个数组中
let keys:Array<number> = [...checkedAllKey,...halfCheckedKey];
    console.log(keys)
// 将所有数组中所有权限id以逗号分隔拼接成字符串。
let rids:string = keys.join(",");
let params:SetRights = {
    rids:rids
}
// 发送请求分配权限
let res = await setRights(roles_id.value,params);
if(res.data.meta.status !==200){
    showMessage(res.data.meta.msg,"error")
    return
}
showMessage("设置成功","success");
dialogVisible.value = false;
emit("over")
}
</script>
<style scoped>
</style>