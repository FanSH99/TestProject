// 简写版：
// let bus={
//   // 定义一个列表，存放订阅者回调
//   list:[],
//   // 定义一个发布者
//   emit(msg){
//     // 遍历存放订阅回调得到每一个callback
//     this.list.forEach(callback=>{
//       callback(msg)
//     })
//   },
//   // 定义一个订阅者，订阅时传递一个回调函数（返回发布者的消息
//   on(callback){
//     this.list.push(callback)
//   }
// };
// 标准版
let bus={
  // 定义一个列表，存放订阅者回调
  list:[],
  // 参数1自定义名称，参数2消息
  emit(eventname,msg){
    // 遍历存放订阅回调得到每一个callback
    this.list.forEach(item=>{
      if(item.eventname===eventname){
        item.callback(msg)
      }
    })
  },
  //参数1自定义名称，参数2回调函数
  on(eventname,callback){
    this.list.push({
      eventname:eventname,
      callback:callback,
    })
  }
};
// 微信小程序遵循的是common.js规范即node规范，node导出用module.export导出
module.exports=bus