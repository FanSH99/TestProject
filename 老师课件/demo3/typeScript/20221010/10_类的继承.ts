class Computer{
    name:string;
    price:number;
    color:string;
    constructor(name:string,price:number,color:string){
        this.price = price;
        this.name = name;
        this.color = color
    }
    look(){
        console.log("可以追剧")
    }
}

class Tv extends Computer{
    size:number;
     constructor(name:string,price:number,color:string,size:number){
        // super 就是该类继承的父类
        super(name,price,color)
        this.size = size;
    };
    
}

let changhong = new Tv("长虹",1999,"黑色",70);
console.log(changhong)
changhong.look();

