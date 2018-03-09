

var http = require("http");
var express = require("express");

http.createServer(function(request,response){
    //发送http头部
    //http状态200：OK
    //内容类型:text-plain
    response.writeHead(200,{'Content-Type':'text-plain'});

    //发送响应数据
    response.end("Hello World\n");
}).listen(8888);

//终端打印一下信息

console.log("Server running at http://127.0.0.1:8888/")