<template>
    <div>
        <h1>我的</h1>
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
        }
    }
</script>