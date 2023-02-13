<template>
    <div class="child">
        <h3>我是一个子组件---{{mynum}}</h3>
        <p>{{mymsg}}</p>
        <button @click="getNum">获取num值</button>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    setup(props) {
        // 如果想在setup获取props里面的数据，需要在setup里传递一个形参
        // props表示父组件传递过来的所有属性，
        console.log(props);

        let getNum = () => {
            console.log(props);//Proxy {mynum: 0}
            console.log(props.mynum);
            console.log(props.mymsg);

        }
        return {
            getNum,
        }
    },
    props: {
        mynum: Number,
        mymsg: String,
    },
    data() {
        return {

        }
    },
})
</script>
<style>
.child {
    width: 400px;
    height: 100px;
    background: #ff7000;
}
</style>