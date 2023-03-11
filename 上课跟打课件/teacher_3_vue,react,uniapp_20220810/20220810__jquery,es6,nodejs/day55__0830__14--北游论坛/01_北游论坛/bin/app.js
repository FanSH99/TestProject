let express = require("express");
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
let app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());


module.exports = app;