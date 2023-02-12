<template>
  <div>
    我是一个有异步任务的组件
  </div>
</template>
<script lang='ts' setup>
  function getTitem():Promise<number>{
    return new Promise((reslove,reject)=>{
            setTimeout(()=>{
                reslove(1234)
            },2000)
    })
  }
  let res = await getTitem();
  console.log(res)
  console.log("执行完毕")
</script>
<style scoped lang='less'>
 
</style>