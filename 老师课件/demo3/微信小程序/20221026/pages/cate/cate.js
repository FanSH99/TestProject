Page({
  data:{
    msg:"学习是我快乐",
    num:0,
    list:[
      {
        name:"iphone14",
        price:4999,
        id:1
      },{
        name:"macbook",
        price:10000,
        id:2
      },{
        name:"ipad",
        price:5000,
        id:3
      }
    ]
  },
  clickMe(){
    console.log("你点俺了")
    this.setData({
      num:10
    })
  },
  move(){
    console.log("手指触摸移动啦")
  },
  sendparams(e){
    console.log(e)
    // 获取事件传递的参数 e.currentTarget.dataset.属性名
    let id = e.currentTarget.dataset.id;
    console.log(id)
    let zhangsan = e.currentTarget.dataset.name;
    console.log(zhangsan)
  
  },
  remove(e){
    console.log(e.currentTarget.dataset.id);
    // this指向当前页面实例
   console.log(this.data.list)
   let index = this.data.list.findIndex(item=>{
     return e.currentTarget.dataset.id===item.id
   })
   this.data.list.splice(index,1)
  //  更新数据试图更新 可以一次更新多个属性
   this.setData({
     list:this.data.list
   })
  },
  presentEven(){
    console.log("父标签事件")
  },
  childEven(){
    console.log("子标签事件")
  }
})