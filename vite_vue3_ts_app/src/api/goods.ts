import request from '../utils/request';
// 获取商品全部列表
let getGoodsList = (data: GoodsData) => request("goods", "GET", data);

// 商品分类
let getCateList = () => request('categories', "GET");

// 商品分类参数
let getCateParams = (id: number, data: AttrData) => request(`categories/${id}/attributes`, "GET", data)

// 上传商品图片
let uploadGoodsImg = (data: FormData) => request(`upload`, "POST", data)

// 添加商品
let addGoods = (data: AddGoodsData) => request(`goods`, "POST", data);

let changeGoods = (id: number, data: AddGoodsData) => request(`goods/${id}`, 'PUT', data)
let deleteGoods = (id: number) => request(`goods/${id}`, 'DELETE');

export {
    getGoodsList,
    getCateList,
    getCateParams,
    uploadGoodsImg,
    addGoods,
    changeGoods,
    deleteGoods
}