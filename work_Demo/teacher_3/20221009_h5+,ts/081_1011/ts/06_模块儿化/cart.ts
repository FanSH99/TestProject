// 2022年10月11日14:28:15

type mycart = string | number | Array<number> | boolean;
let myfoods: Cart.Goods = {
    name: "鼠标",
    price: 12323
}
interface Goods<T, U, I, G> {
    name: T,
    price: U,
    color: I,
    date: G
}

export {
    mycart,
    Goods
}
