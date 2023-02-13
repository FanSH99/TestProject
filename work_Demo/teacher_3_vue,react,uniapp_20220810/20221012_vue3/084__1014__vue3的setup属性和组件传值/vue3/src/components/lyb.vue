<template>
    <div class="child">
        <h1>留言板</h1>
        <div v-if="list.length!=0">
            <div v-for="(item,index) in list" :key="index" class="msg">
                <div>作者:{{item.name}}</div>
                <div>内容：{{item.content}}
                    <button style="float:right" @click="list.splice(index,1)">删除</button>
                </div>
            </div>
        </div>
        <div style="text-align:center;color:#e4e4e4" v-else>暂无数据~~</div>
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
    props: ["msg"],
    setup(props) {
        let list = ref([
            {
                name: '黎璃',
                content: '人生就像一趟列车，进了站，有人要上车，有人就必须要下车',
            },
            {
                name: '花千骨',
                content: '我诅咒你,生生世世，不老不死，不伤不灭',
            }
        ])
        watch(props.msg, () => {
            list.value.push(props.msg)
        });
        return {
            list,
        }
    },
})
</script>
<style lang='less' scoped>
.msg {
    margin: 10px 0;
    padding: 5px 0;
    border-bottom: 1px solid #f1f1f1;
}
</style>