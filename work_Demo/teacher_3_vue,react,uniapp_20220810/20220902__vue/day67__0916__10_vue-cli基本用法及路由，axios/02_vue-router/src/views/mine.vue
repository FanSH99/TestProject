<template>
    <div>
        <h1>我的</h1>
        <h2>{{state}}--{{name}}</h2>
    </div>
</template>
<script>


export default {
    data() {
        return {
            name: "",
            state:"未登录",
        }
    },
    // 组件独享守卫进入前调用
    beforeRouteEnter(to,from,next) {
        console.log(to,'--------组件独享进入前守卫to');
        console.log(from, '--------组件独享进入前守卫from');
        next();
       
        //放行。和全局前置差不多，但是只有访问组件才会调用。没有next，则默认拦截不允许访问。
    },
    //当不同路由对应相同组件，发生改变时触发，例如动态路由之间的切换。 
    beforeRouteUpdate(to,from,next) {
        console.log(to, '--------组件独享更新前守卫to--用于动态路由');
        console.log(from, '--------组件独享更新前守卫from-用于动态路由');
        next();//放行。
    },
    //路由离开之前调用。
    beforeRouteLeave(to,from,next) {
        console.log(to,'-----组件独享离开前to');
        console.log(from, '-----组件独享离开前next');
        next()
    },
    created() {
        if (localStorage.getItem("name")) {
            this.name = localStorage.getItem("name");
            this.state = "已登录"
        } else {
            this.state = "未登录"
        }
    }
    
}
</script>
