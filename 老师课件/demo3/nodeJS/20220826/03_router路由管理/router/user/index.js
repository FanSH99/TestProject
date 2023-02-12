let express = require("express");
let router = express.Router();
router.get("/user",(req,res)=>{
    res.send("admin")
})

router.get("/user/photo",(req,res)=>{
    res.send("头像")
})

module.exports = router;