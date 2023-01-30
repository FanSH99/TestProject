let request = (url,method,data)=>{
    return new Promise((reslove,reject)=>{
        $.ajax({
            url:url,
            method:method,
            data:data,
            success(res){
                reslove(res)
            },
            error(err){
                reject(err)
            }
        })
    })
}