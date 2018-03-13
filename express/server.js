var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//get
app.use(express.static("public"));
// app.get("/index.html",function (req,res) {
//     res.sendFile(__dirname + "/index.html");
// })
//
// app.get("/other",function (req,res) {
//     var response = {
//         firstName : req.query.firstName,
//         lastName : req.query.lastName
//     }
//     console.log(response);
//     res.send(response)
// })


//post
app.get("/index.html",function (req,res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/otherp",urlencodedParser,function (req,res) {
    var response = {
        firstName : req.body.firstName,
        lastName : req.body.lastName
    }
    console.log(response);
    res.send(response)
})

var server = app.listen("8081",function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host,port)
})