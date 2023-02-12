let express = require("express");
let router = express.Router();

router.get("/list", (req, res) => {
    res.send({
        name: "白浅",
        age: 18,
        sex: "男"

    })
})

module.exports = router;