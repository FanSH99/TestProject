let express = require("express");
let cookieParser = require("cookie-parser");
let bodyParser = require("body-parser");
let web = express();
web.use(express.static("public"));
web.use(bodyParser.urlencoded({extended:true}));
web.use(cookieParser());
module.exports = web;
