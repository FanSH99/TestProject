const express = require("express");
// 导入验证数据的中间件
const expressJoi = require("@escook/express-joi");

// 导入文章分类的路由处理函数模块
const artCate_handler = require("../router_handler/artcate");
// 导入需要的验证规则对象
const {
  add_cate_schema,
  delete_cate_schema,
  get_cate_schema,
  update_cate_schema,
} = require("../schema/user");

const router = express.Router();

// 获取文章分类列表数据的路由
router.get("/cates", artCate_handler.getArtCates);

// 新增文章分类的路由
router.post(
  "/addCates",
  expressJoi(add_cate_schema),
  artCate_handler.addArticleArtCates
);

router.get(
  "/deletecate/:id",
  expressJoi(delete_cate_schema),
  artCate_handler.deleteCateById
);

router.get(
  "/cate/:id",
  expressJoi({ get_cate_schema }),
  artCate_handler.getArtCatesById
);

router.post(
  "/updatecate",
  expressJoi(update_cate_schema),
  artCate_handler.updateCateById
);
module.exports = router;
