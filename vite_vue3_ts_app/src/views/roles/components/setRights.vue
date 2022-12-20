<template>
    <div>
        <el-dialog v-model="dialogVisible" title="分配权限" width="50%" :before-close="handleClose">
            <div>
                <!-- 这里default-expanded-keys是默认展开，default-checked-keys是默认选中，两个绑定的都是数组。注意不要拼错了， -->
                <el-tree ref="treeRef" :data="data" show-checkbox :default-expanded-keys="defaultExpandKeys"
                    node-key="id" highlight-current :default-checked-keys="defaultCheckedKeys" :props="defaultProps" />
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="confirm">确定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>
<script lang='ts' setup>

import { ref, reactive, Ref } from 'vue';
import { getRightsList, setRights } from '../../../api/roles';
import { showMessage } from '../../../utils/showMessage';
let dialogVisible = ref(false)


let data = ref([]);

let defaultProps = reactive({
    // 注意label不要写错成lable，否则文字不显示出来。
    label: 'authName',
    children: "children",
})
// 默认选中的key
let defaultCheckedKeys: Ref<number[]> = ref([]);
// 默认展开的key
let defaultExpandKeys: Ref<number[]> = ref([]);

let handleClose = () => {
    dialogVisible.value = false;
    defaultCheckedKeys.value = [];
    defaultExpandKeys.value = []
}
let roleId = ref(0);
let init = async (row: any) => {
    dialogVisible.value = true;
    let res = await getRightsList("tree");
    // console.log(res);
    data.value = res.data.data;
    roleId.value = row.id;
    // 获取当前用户的权限列表。
    row.children.forEach((item: any) => {
        // console.log(item);
        // 一级权限id,存放到默认展开的key列表
        defaultExpandKeys.value.push(item.id);
        item.children.forEach((item1: any) => {
            defaultExpandKeys.value.push(item1.id);
            // 三级权限选中
            item1.children.forEach((item2: any) => {
                defaultCheckedKeys.value.push(item2.id)
            })
        })

    });

}

defineExpose({
    init,
})
// tree组件实例。
let treeRef = ref();

// getCheckedKeys,getHalfCheckedNodes
let emit = defineEmits(['over']);
let confirm = async () => {
    // console.log(defaultExpandKeys.value, defaultCheckedKeys.value);
    let checkedAllKey = treeRef.value.getCheckedKeys();

    let halfCheckedkeys = treeRef.value.getHalfCheckedKeys();
    console.log(checkedAllKey.value, halfCheckedkeys.value);

    let keys = [...checkedAllKey, halfCheckedkeys];
    // console.log(keys);
    let rids: string = keys.join(",");
    // console.log(rids);
    let data: SetRights = {
        rids: rids,
    }
    let res = await setRights(roleId.value, data);
    console.log(res);
    if (res.data.meta.status != 200) {
        showMessage(res.data.meta.msg, "error");
        return;
    }
    showMessage("设置成功", 'success');
    emit('over');
    handleClose();

}
</script>
<style lang='less' scoped>

</style>