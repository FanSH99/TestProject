/* 2022年8月25日19:24:10 */
let express = require("express");
let bodyParser = require("body-parser");

let path = require("path");
let multer = require("multer");
console.log(multer);

let index = 0;
let filename = "";
let multerConfig = multer.diskStorage({
    destination: "./public/file",
    filename: (req, file, callback) => {
        index++;
        console.log(index);
        console.log(file);
        let type = path.extname(file.originalname);
        let newFilename = index + type;
        filename = newFilename;
        console.log(filename);
        callback(null, newFilename);
    }
})

let upload = multer({ storage: multerConfig });
let web = express();
web.use(express.static("public"));
web.use(bodyParser.urlencoded({ extended: true }));

web.post("/upload", upload.single("myfile"), (req, res) => {
    res.send(`<img src=/file/${filename}>`);
})


web.listen(8080, () => {
    console.log("web服务端口已开启");
})