<template>
    <div>

        id: <input type="text" disabled>
        名称: <input type="text" v-model="name">
        <button @click="add">添加</button>
        <input type="text" placeholder="请输入搜索内容" v-model="keyword">
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>操作</th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="(item,index) in search" :key="index">
                    <th>{{item.id}}</th>
                    <th>{{item.name}}</th>
                    <th>{{getTime()}}</th>
                    <th><button @click="remove(index)">删除</button></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang='ts'>
import { defineComponent, ref, computed } from 'vue'
export default defineComponent({
    setup() {
        // 2022年10月14日9:24:40
        let list = ref([
            {
                id: 1,
                name: "奔驰",
                date: new Date()
            },
            {
                id: 2,
                name: "劳斯莱斯",
                date: new Date()
            },
            {
                id: 3,
                name: "宝马",
                date: new Date()
            },
            {
                id: 4,
                name: "法拉利",
                date: new Date()
            },

        ])

        let getTime = () => {
            let time = new Date();
            let y = time.getFullYear();
            let m = time.getMonth() + 1;
            let d = time.getDate();
            return `${y}年${m}月${d}日`
        }

        let name = ref("");

        let add = () => {
            let length = list.value.length;
            let obj = {
                id: list.value[length - 1].id + 1,
                name: name.value,
                date: new Date(),
            }
            list.value.push(obj)
        }

        let keyword = ref('');
        let search = computed(() => {
            return list.value.filter(item => {
                return item.name.includes(keyword.value)
            })
        })


        let remove = (index: number) => {
            list.value.splice(index, 1)
        }
        return {
            list,
            getTime,
            name,
            add,
            keyword,
            search,
            remove
        }
    },
})
</script>
<style lang='less' scoped>

</style>