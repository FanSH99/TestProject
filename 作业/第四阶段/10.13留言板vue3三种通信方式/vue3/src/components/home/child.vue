<template>
    <div class="child">
        <h1>留言板</h1>
        {{mymsg}}{{getlist}}
        <div v-if="list.length!=0">
            <div v-for="(item,index) in getlist" :key="index" class="msg">
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
        let getlist = computed(() => {
            if (props.mymsg) {
                // list.value.push(props.mymsg.value)
                console.log(props);

                console.log(props.mymsg.name);
                let obj = {
                    name: props.mymsg.name,
                    content: props.mymsg.name,
                }
                let newlist = list.value;
                newlist.push(obj);
                return newlist
            } else {
                return list.value
            }

        })
        return {
            getlist,
            list,
        }
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