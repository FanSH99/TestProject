let request=(url,data,method)=>{
  return new Promise((reslove,reject)=>{
    wx.request({
      url: url,
      data:data,
      method:method,
      success(res){
        reslove(res)
      },
      fail(err){
        reject(err)
      }
    })
  })
}