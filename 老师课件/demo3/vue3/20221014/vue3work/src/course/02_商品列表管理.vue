<template>
    <div>
        id: <input type="text" disabled> 名称： <input type="text" v-model="name"> <button @click="add">添加</button>
        <input type="text" placeholder="请输入商品名称" v-model="keywords">
    </div>
    <div>
        <table border="1">
            <tr>
                <th>id</th>
                <th>name</th>
                <th>data</th>
                <th>操作</th>
            </tr>
            <tr v-for="(item,index) in search" :key="index"> 
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{filterTime(item.date)}}</td>
                <td>
                    <button @click="remove(index)">删除</button>
                </td>
            </tr>
        </table>
        <!-- {{search}} -->
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref ,computed} from 'vue'
export default defineComponent({
    setup() {
        let name = ref("")
        let list = ref([{
            id: 1,
            name: "奔驰",
            date: new Date()
        }, {
            id: 2,
            name: "宝马",
            date: new Date()
        }, {
            id: 3,
            name: "法拉利",
            date: new Date()
        }, {
            id: 4,
            name: "劳斯莱斯",
            date: new Date()
        },])
        let filterTime = (date:Date)=>{
            let year = date.getFullYear();
            let m = date.getMonth()+1;
            let day = date.getDate();
            return `${year}年${m}月${day}日`
        }
        // 添加商品事件
        let add = ()=>{
            console.log(name.value)
            let obj = {
                id:list.value.length+1,
                name:name.value,
                date:new Date()
            }
            list.value.push(obj)
        }
        let keywords = ref("")
        let search = computed(()=>{
             return list.value.filter(item=>{
                return item.name.includes(keywords.value)
             })
        })
        let remove = (index:number)=>{
            list.value.splice(index,1)
        }
        return {
            list,
            filterTime,
            name,
            add,
            keywords,
            search,
            remove
        }
    },
})
</script>
<style scoped lang='less'>

</style>