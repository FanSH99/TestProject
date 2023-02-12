let api = `https://autumnfish.cn`
let request = (url,method,data=null)=>{
    return new Promise((reslove,reject)=>{
        wx.request({
          url: api+url,
          method:method,
          data:data,
          success(res){
            reslove(res)
          },
          fail(err){
              reject(err)
          }
        })
    })
}
module.exports = request;