<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动地点" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
      <el-table-column prop="phone" label="联系方式"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- {{scope.row}} -->
          <el-button type="primary" size="mini"
            >上传<i class="el-icon-upload el-icon--right"></i
          ></el-button>
          <el-button type="primary" size="mini" @click="remove(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-carousel height="375px" initial-index="1" direction="vertical">
      <el-carousel-item>
         <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a30d40ddda3742fb52e0cc90300a50b.jpg?w=2452&h=920" alt="">
      </el-carousel-item>
      <el-carousel-item>
         <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/06c044611f215ddef570d3a6a9a60725.jpg?thumb=1&w=1533&h=575&f=webp&q=90" alt="">
      </el-carousel-item>
      <el-carousel-item>
         <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9bc140d12e1e29056d1077615ad4fa30.jpg?thumb=1&w=1533&h=575&f=webp&q=90" alt="">
      </el-carousel-item>
      <el-carousel-item>
         <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/18aa4da0bddb6fcfee429016771fd71a.jpg?thumb=1&w=1533&h=575&f=webp&q=90" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        address: "",
      },
      dialogVisible:false,
      rules: {
        name: {
          required: true,
          message: "请输入名称",
          trigger: "blur",
        },
        address: {
          required: true,
          message: "请输入地址",
          trigger: "blur",
        },
      },
      tableData: [
        {
          name: "张三",
          age: 18,
          sex: "男",
          phone: 110,
        },
        {
          name: "王五",
          age: 18,
          sex: "男",
          phone: 110,
        },
        {
          name: "赵六",
          age: 18,
          sex: "男",
          phone: 110,
        },
      ],
    };
  },
  methods: {
    submitForm() {
      console.log(this.$refs.ruleForm);
      this.$refs.ruleForm.validate((isVal) => {
        console.log(isVal);
        if (!isVal) {
          return;
        }
        this.$message({
          message: "校验通过",
          type: "success",
        });
      });
    },
    remove(row) {
      console.log(row);
      row.name = "哈哈哈哈";
    },
    handleClose(){
      console.log("模态框将要关闭")
      this.dialogVisible = false;
    }
  },
};
</script>
<style lang="less" scoped>
img{
  width: 100%;
}
</style>