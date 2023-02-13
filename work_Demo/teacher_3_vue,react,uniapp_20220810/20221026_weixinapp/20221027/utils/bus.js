let bus = {
  // 存放订阅回调。
  list: [],
  // 发布者
  emit(msg) {
    this.list.forEach(callback => {
      callback(msg)
    })
  },
  // 订阅者
  on(callback) {
    this.list.push(callback)
  }
}

//微信小程序遵循的是common.js规范，即node规范。
// 导出
module.exports=bus;