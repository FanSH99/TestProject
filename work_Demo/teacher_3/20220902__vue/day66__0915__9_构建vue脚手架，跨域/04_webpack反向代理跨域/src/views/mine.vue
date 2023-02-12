<template>
    <div>
        <h1>首页{{name}}</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name:""
        }
    },
    created() {
        console.log(this.$route.query.name);
        this.name = this.$route.query.name;
        let xhr = new XMLHttpRequest();
        // localhost:8080/api 前面部分在webpack
        xhr.open("get", "/maoyan/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4");
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                let res = xhr.response;
                res = JSON.parse(res);
                console.log(res)
            }
        }
    }
}
</script>