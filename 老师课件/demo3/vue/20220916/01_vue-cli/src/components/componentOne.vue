<template>
    <div>
        <h1>{{msg}}</h1>
        <ul>
            <li v-for="(item,index) in list" :key='index' :class="{red:index===1}">
                {{item}}
            </li>
        </ul>
        <button @click="changeMsg">改变</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg:"vue基础语法",
                list:["张三","王五","赵六"]
            }
        },
        methods:{
            changeMsg(){
                // this.list[1] = '小红'
                // this.list=this.list.concat([])
                this.$set(this.list,1,"小红")
            }
        }
    }
</script>
<style>
    .red{
        color: red;
    }
</style>