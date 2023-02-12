<template>
    <div>
        <h1>我的</h1>
        <button @click="getList">获取热映豆瓣电视</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        created(){
            console.log(this.$route.query.name)
            let xhr = new XMLHttpRequest();
            xhr.open("get",'/maoyan/api/mmdb/movie/v3/list/hot.json?ct=%E5%8C%97%E4%BA%AC&ci=1&channelId=4');
            xhr.send();
            xhr.onreadystatechange = ()=>{
                if(xhr.readyState ===4){
                    let res = JSON.parse(xhr.response);
                    console.log(res)
                }
            }
        },
        methods:{
            getList(){
                let xhr = new XMLHttpRequest();
            xhr.open("get",'/douban/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0');
            xhr.send();
            xhr.onreadystatechange = ()=>{
                if(xhr.readyState ===4){
                    let res = JSON.parse(xhr.response);
                    console.log(res)
                }
            }
            }
        }
    }
</script>