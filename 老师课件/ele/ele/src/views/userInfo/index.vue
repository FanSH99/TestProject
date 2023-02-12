<template>
  <div class="page">
    <my-nav-bar>
      <!-- 具名插槽 -->
      <template #left>
        <div class="lefts">
          <van-icon name="arrow-left" @click="$router.go(-1)"></van-icon>
        </div>
      </template>
      <template #center>
        <div>账户信息</div>
      </template>
    </my-nav-bar>
    <div class="user" v-if="userInfo">
      <van-cell is-link @click="changeFile">
        <template #title>
          <span class="custom-title">头像</span>
        </template>
        <template #right-icon>
          <img
            :src="'https://elm.cangdu.org/img/' + userInfo.avatar"
            alt=""
            class="acatar"
          />
          <van-icon name="arrow" class="right" />
        </template>
      </van-cell>
      <van-cell title="用户名" is-link :value="userInfo.username" />
      <van-cell title="收货地址" is-link />
    </div>
    <div v-if="userInfo">
      <p class="bd">账号绑定</p>
      <van-cell title="手机" is-link icon="phone-o" />
    </div>
    <div v-if="userInfo">
      <p class="bd">安全设置</p>
      <van-cell title="登录密码" is-link value="修改" />
    </div>
    <div style="width: 95%; margin: 20px auto" v-if="userInfo">
      <van-button color="#d8584a" block size="small">退出登录</van-button>
    </div>
    <input type="file" ref="myfile" style="display: none;" @change="fileChange">
  </div>
</template>
<script>
import { getUserProFile,uploadFile} from "@/api/user";
import { Toast } from "vant";
export default {
  data() {
    return {
      userInfo: null,
    };
  },
  async created() {
    let res = await getUserProFile({ user_id: this.$store.state.user_id });
    console.log(res);
    if (res.data.status == 0) {
      this.userInfo = null;
      return;
    }
    this.userInfo = res.data;
  },
  methods: {
    changeFile(){
        console.log("选择图片")
        console.dir(this.$refs.myfile)
        this.$refs.myfile.click();
    },
    async fileChange(e){
        console.log(e)
        // 获取当前要上传的文件对象信息
        let file = e.target.files[0];
        console.log(file)
        // 注意：上传文件的参数类型为 from Data类型
        let data = new FormData();
        data.append("file",file);
        // 上传文件的 content-type multipart/form-data
        let res = await uploadFile(this.$store.state.user_id,data);
        console.log(res)
        Toast.success("上传成功")
        this.userInfo.avatar = res.data.image_path
    }
  },
};
</script>
<style lang="less" scoped>
.user {
  background: #fff;
  margin: 10px 0;
  .acatar {
    width: 40px;
    height: 40px;
    display: block;
    border-radius: 50%;
  }

  .right {
    margin-left: 5px;
    line-height: 40px;
    color: #b4b4b4;
  }
  .custom-title {
    line-height: 40px;
  }
}
.bd {
  padding: 10px 15px;
  font-size: 13px;
  color: #666;
}
</style>