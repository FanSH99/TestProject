let request=(url,data,method,header)=>{
  return new Promise((reslove,reject)=>{
    wx.request({
      url: url,
      data: data,
      dataType: dataType,
      enableCache: true,
      enableHttp2: true,
      enableQuic: true,
      header: header,
      method: method,
      responseType: responseType,
      timeout: 0,
      success: (result) => {
        reslove(result)
      },
      fail: (err) => {
        reject(err)
      },
      complete: (res) => {},
    })
  })
}

module.exports=request