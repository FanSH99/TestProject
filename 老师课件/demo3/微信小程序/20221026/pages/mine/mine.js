let app = getApp();
app.getUser();
Page({
    data:{
        like:app.globdata.like,
        isshow:true
    },
    changeIsshow(){
        this.setData({
            isshow:false
        })
    }
})