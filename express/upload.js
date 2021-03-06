var express = require("express");
var app = express();
var cookieParser = require('cookie-parser')

var fs = require("fs");
app.use(cookieParser())

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: './public'}).array('image'));

app.get("/upload.html",function (req,res) {
    res.sendFile(__dirname + "/upload.html");
})

app.post("/file_upload",function (req,res) {
    console.log(req.files[0]);
    var des_file = __dirname + "/" + req.files[0].originalname;
    console.log("Cookies: ", req.cookies)
    fs.readFile(req.files[0].path,function (err,data) {
        fs.writeFile(des_file,data,function (err) {
            if(err){
                console.log(err)
            }else{
                response = {
                    massage : "success",
                    filename : req.files[0].originalname
                }
            }
            console.log(response);
            res.send(JSON.stringify(response))
        })
    })
})

var server = app.listen("8081",function () {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})