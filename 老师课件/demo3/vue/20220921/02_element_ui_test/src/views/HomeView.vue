<template>
  <div class="home">
    <el-button type="primary" size="mini">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    <div>
      <el-radio v-model="radio" label="1" @change="radioChange">中国</el-radio>
  <el-radio v-model="radio" label="2" disabled border>日本</el-radio>
    </div>
    <div>
      <el-radio-group v-model="color">
    <el-radio :label="3">红色</el-radio>
    <el-radio :label="6">白色</el-radio>
    <el-radio :label="9">黑色</el-radio>
  </el-radio-group>
    </div>
    <div>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data(){
    return {
      radio:"2",
      color:9,
      input:""
    }
  },
  methods:{
    radioChange(){
      console.log("我发生变化啦")
    }
  }
}
</script>
