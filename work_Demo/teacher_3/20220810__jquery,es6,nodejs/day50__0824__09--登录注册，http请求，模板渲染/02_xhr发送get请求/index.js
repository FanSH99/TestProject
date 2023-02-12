let express = require("express");

let webapp = express();

webapp.use(express.static("public"));

webapp.get("/hot/movie", (req, res) => {
    console.log(req.query.mytype);
    if (req.query.mytype == 2) {
        res.send(
            {
                name: "雀斑公主",
                url: "https://p0.pipi.cn/mmdb/25bfd633807923c7ed3ba346fbe88e766cc37.jpg?imageView2/1/w/160/h/220"
            },
        )
        return;
    }
    res.send(
        {
            name: "明日战记",
            url: "https://p0.pipi.cn/mmdb/25bfd63302f0fa395b07accde068bfd3c361f.jpg?imageView2/1/w/160/h/220"
        },
    )
})

webapp.listen(9000, () => {
    console.log("web服务器已经启动！！！");
})

