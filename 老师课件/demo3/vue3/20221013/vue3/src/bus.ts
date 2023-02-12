interface Callback{
    (a:any):void
}
interface Mybus{
    list:Array<Function>,
    emit(msg:any):void,
    on(callback:Callback):void
}

let bus:Mybus= {
    list:[],
    emit(msg){
       this.list.forEach(callback=>{
        callback(msg)
       })
    },
    on(callback){
        this.list.push(callback)
    }
}

export default bus;