import { requestGet, requestPost } from "@/utils/request";

let getCart = () => requestGet("/api/front/cart/list?page=1&limit=100&isValid=true");

let addCartInfo = (data) => requestPost('/api/front/collect/add', data)

export {
    getCart,
    addCartInfo,
}