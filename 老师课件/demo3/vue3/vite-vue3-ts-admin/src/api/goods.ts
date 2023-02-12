import request from "../utils/request";

//获取商品列表
let getGoodsList = (data:GoodsListParams)=>request(`goods`,"GET",data);
//  获取商品分类列表
let getCateList = ()=>request(`categories`,"GET");
//  获取商品分类参数
let getCateParams = (id:number,data:Attributes)=>request(`categories/${id}/attributes`,"GET",data)

// 上传商品图片
let uploadGoodsImg = (data:FormData)=>request(`upload`,"POST",data)

// 添加商品
let addGoods = (data:AddGoodsData)=>request(`goods`,"POST",data)

//编辑提交参数 
let updateParams = (id:number|undefined,attrId:number,data:UpdateParams)=>request(`categories/${id}/attributes/${attrId}`,"PUT",data)
export{
    getGoodsList,
    getCateList,
    getCateParams,
    uploadGoodsImg,
    addGoods,
    updateParams
}