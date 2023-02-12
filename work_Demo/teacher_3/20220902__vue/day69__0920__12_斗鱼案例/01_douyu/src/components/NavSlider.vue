<template>
  <div class="slider">
    <ul>
        <li v-for="(item,index) in sliderList" :key="index" @click="goPage(item.path)">
        <span>{{item.name}}</span><i class="fa fa-chevron-right fa-lg"></i>
        </li>
    
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            sliderList: [
                {
                    path: "/",
                    name: "首页"
                },
                {
                    path: "/class",
                    name: "分类"
                },
                {
                    path: "/recommond",
                    name: "推荐"
                },
                {
                    path: "/mine",
                    name: "我的"
                },
               
            ]
        }
    },
    
    methods: {
        goPage(path) {
            this.$router.push({
                path:path
            })
            // 提交mutation隐藏导航栏。
            this.$store.commit("changeSlider");
        }
    }

}
</script>

<style lang="less" scoped>
.slider{
    width: 150px;
    // 100vh表示一个屏幕的高度。
    height: calc(100vh - 50px);
    position: fixed;
    top:50px;
    left:0;
    color:#fff;
    background: #333;
    z-index: 99;
    li{
        width:100%;
        padding:10px;
        color:#fff;
        font-size: 14px;
        cursor: pointer;
        margin-top:20px;
        i{
            float:right;
        }
    }
    li:hover{
        background: #555;
    }
}
</style>