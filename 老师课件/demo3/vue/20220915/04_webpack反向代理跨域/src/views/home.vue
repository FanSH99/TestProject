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
        created(){
            let xhr = new XMLHttpRequest();
            xhr.open("get","/taobao/sug?code=utf-8&q=水杯");
            xhr.send();
            xhr.onreadystatechange = ()=>{
                if(xhr.readyState ===4){
                    let res = JSON.parse(xhr.response)
                    console.log(res)
                }
            }
        }
    }
</script>