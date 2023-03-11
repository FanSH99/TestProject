// 2022年8月26日14:08:23
let express = require("express");


/* 下载多个第三方模块，
npm i cookie-parser body-parser
*/

let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");

let web = express();
web.use(express.static("public"));
web.use(bodyParser.urlencoded({ extended: true }));
web.use(cookieParser());

module.exports = web;

