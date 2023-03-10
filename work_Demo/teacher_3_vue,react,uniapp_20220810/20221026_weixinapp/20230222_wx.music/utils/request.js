let baseUrl="http://106.12.150.223:3000";
let sendHttp=(url,data=null,method="get",header=null)=>{
  return new Promise((reslove,reject)=>{
    wx.request({
      url: baseUrl+url,
      data: data,
      header: header,
      method: method,
      success: (res) => {
        reslove(res)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

module.exports=sendHttp;
