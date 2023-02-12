let express = require("express");
let router = express.Router();
router.get("/list",(req,res)=>{
    res.send({comingTitle: "9月2日 周五",
    globalReleased: false,
    haspromotionTag: false,
    id: 1403422,
    img: "https://p0.pipi.cn/mmdb/25bfd633338f2abe12313913e01f3c630c3c8.jpg?imageMogr2/thumbnail/2500x2500%3E",
    nm: "我的非凡父母",
    preShow: true,
    rt: "2022-09-02",
    sc: 0,
    showInfo: "今天3家影院放映4场",
    showStateButton: {color: "#3C9FE6", content: "预售", onlyPreShow: false},
    showst: 4,
    star: "惠英红,吴岱融,吴千语",
    version: "",
    wish: 30920,
    wishst: 0})
})

module.exports = router;