interface Length{
    length:number,
    push():void
}
// 泛型约束 泛型中必须要有接口中的所有属性
function getLength<T extends Length >(a:T):number{
    return a.length
}
getLength([21,23])

let s1:Sfile = "声明文件"
myLike = '2323';
// sendUser("232",23323);