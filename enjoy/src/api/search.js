import { requestGet } from "@/utils/request";

let getHotSearch = () => requestGet('/api/front/product/hot');
let getHotKeywords = () => requestGet('/api/front/search/keyword');

let getSearch = (keyword) => requestGet(`/api/front/products?keyword=${keyword}`, );

export {
    getHotSearch,
    getHotKeywords,
    getSearch,
}