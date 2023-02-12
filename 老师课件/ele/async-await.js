function getUser(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove("成功")
        },2000)
    })
}
getUser().then((res)=>{
    console.log(res)
   console.log(111111)
})

async function like(){
    let res = await getUser();
    console.log(res)
    console.log(11111)
}
console.log(like())


function getNum(a=1){
    console.log(a)
}

getNum(4)