<template>
    <div>
        <div v-for="(item, index) in paramsList" :key="index">
            <p>{{ item.attr_name }}</p>
            <div>
                <el-tag closable size="large" class="mytag" v-for="(value, idx) in item.attr_vals" :key="idx"
                    @close="closeTag(index, idx)">
                    {{ value }}
                </el-tag>
            </div>
        </div>
        <div v-if="paramsList.length == 0">
            <el-empty>没有更多参数</el-empty>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { Ref, ref } from 'vue';
import bus from '../../../utils/bus'
import { getCateParams } from '../../../api/goods'
import { showMessage } from '../../../utils/showMessage';
let paramsList: Ref<any[]> = ref([])
// 监听自定义事件接收id
bus.on("sendid", async (id: any) => {
    // console.log(id);
    let data: AttrData = {
        sel: 'many'
    }
    let res = await getCateParams(id, data);
    // console.log(res);
    if (res.data.meta.status != 200) {
        showMessage(res.data.meta.msg, "error");
        return;
    }
    paramsList.value = res.data.data;
    paramsList.value.forEach((item: any) => {
        // item.attr_vals = JSON.parse(item.attr_vals)
        let type = item.attr_vals.indexOf(",")
        // console.log(type);
        if (type == -1) {
            item.attr_vals = item.attr_vals.split(' ');
        } else {
            item.attr_vals = item.attr_vals.split(',');
        }

    })





})

let closeTag = (index: number, idx: number) => {
    // console.log(index, idx);
    let attrObj = paramsList.value[index];
    // console.log(attrObj);
    attrObj.attr_vals.splice(idx, 1)

}

defineExpose({
    paramsList
})

</script>
<style scoped>
.attr_name {
    font-size: 14px;
    color: #444;
    margin: 15px 0;
}

p {
    margin: 10px 0;
}

.mytag {
    margin-right: 10px;
    margin-bottom: 10px;
}
</style>