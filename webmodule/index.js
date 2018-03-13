var http = require("http");
var url = require("url");
var fs = require("fs");

//创建服务器
http.createServer(function (req,res) {
    //解析请求，包括文件名
    var pathname = url.parse(req.url,true).pathname;
    //输出请求的文件名
    console.log(pathname)
    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1),function (err,data) {
        if(err){
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(400,{"Content-Type":"text/plain"});
        }else{
            // HTTP 状态码: 200 : OK
            // Content Type: text/plain
            res.writeHead(200, {'Content-Type': 'text/html'});
            // 响应文件内容
            res.write(data.toString());
        }
        //  发送响应数据
        res.end();
    })
}).listen(8080);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');