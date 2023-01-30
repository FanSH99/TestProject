<template>
    <div class="parent">
        <child @sendmsg="getmsg" />
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
import { defineComponent, reactive, ref, computed } from 'vue'
import child from './child.vue'
export default defineComponent({
    props: {
        mymsg: Object,
    },
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
        function getmsg(msg: any) {
            console.log(msg);
            list.value.push(msg)

        }
        return {
            getmsg,
            list,
        }
    },
    components: {
        child,
    },
    data() {
        return {

        }
    },
})
</script>
<style scoped>
.msg {
    padding: 10px 0;
    border-bottom: 1px solid #e4e4e4;
}
</style>