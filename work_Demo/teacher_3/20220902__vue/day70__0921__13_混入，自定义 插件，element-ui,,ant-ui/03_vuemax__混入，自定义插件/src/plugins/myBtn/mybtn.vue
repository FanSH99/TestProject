<template>
  <div>
    <button :class="{success:type==='success',info:type==='info',round:round==='true'}">
        <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
    name: '',
    props: {
        type: String,
    round:Boolean,
  },
  data(){
    return {
       
    }
  }
}
</script>
<style>
.default{
        background: #d57b7b;
        padding:5px 15px; 
        border:1px solid transparent;
        color:#fff;
    }

    .success{
        background: #67c23a;
        color:#fff;
    }
    .info{
        background: #909399;
    }
    .round{
        border-radius:5px;
    }
</style>