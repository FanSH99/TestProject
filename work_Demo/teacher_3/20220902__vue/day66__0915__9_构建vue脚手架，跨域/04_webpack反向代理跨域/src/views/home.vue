<!-- 2022年9月15日15:20:08 -->

<template>
    <div>
        <h1>首页</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
                
            }
    },
    created() {
        let xhr = new XMLHttpRequest();
        // localhost:8080/api 前面部分在webpack
        xhr.open("get", "taobao/sug?code=utf-8&q=水杯");
        xhr.send();
        xhr.onreadystatechange=() => {
            if (xhr.readyState === 4) {
                let res = xhr.response;
                res = JSON.parse(res);
                console.log(res)
            }
        }
    },
}
</script>