let express = require("express");
let bodyParser = require("body-parser");

let path = require("path");
let multer = require("multer");

let index = 0;
let imgname = "";
let fileName = "";
let multerCong = multer.diskStorage({
    destination: "./public/file",
    filename: (req, file, callback) => {
        index++;
        let type = path.extname(file.originalname);
        let newname = index + type;
        if (type == ".mp4") {
            fileName = `<h1>上传的视频如下：</h1><br><video src="./file/${newname}" controls style="height:400px" autoplay> </video>`
        } else if (type == ".jpg" || type == ".png" || type == ".gif") {
            fileName = `<img src="./file/${newname}"> </img>`
        }
        callback(null, newname);
    }
})

let upload = multer({ storage: multerCong });

let web = express();

web.use(express.static("public"));
web.use(bodyParser.urlencoded({ extended: true }));

web.post("/upload", upload.single("myfile"), (req, res) => {
    // console.log(imgname);
    // console.log(`<img src=http://localhost:8080/file/${imgname}>`);
    // res.send(`<img src=./file/${imgname}>`);
    res.send(fileName);
})

web.listen(8080, () => {
    console.log("服务器端口已开启！！！！！！");
})