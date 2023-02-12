interface Mydata{
    [key:string]:any
}
let myhomes:Home.Myhome = {
    msg:"学习学习"
};
let homea:Home.homa = 123;
export default function(data:Mydata):Promise<any>{
    return new Promise((reslove:Function,reject:Function)=>{
         reslove(data)
    })
}