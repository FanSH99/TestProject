<template>
  <div>
        <button :class="{success:type==='success',info:type==='info',round:round}">
            <slot></slot>
        </button>
  </div>
</template>
<script>
export default {
  props:{
    type:String,
    round:Boolean
  },
  data(){
    return {
       
    }
  }
}
</script>
<style scoped>
button{
    background: #fff;
    border: 1px solid #e4e4e4;
    padding: 5px 10px;
}
.success{
    background-color: #67c23a;
    color: #fff;
}
.info{
    background-color: #909399;
    color: #fff;
}
.round{
    border-radius: 5px;
}
</style>