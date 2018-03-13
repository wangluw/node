var http = require("http");

//用于请求的选项
var option = {
    host : "localhost",
    port : 8080,
    path : "/index.json"
}

// 处理响应的回调函数
var callback = function(res){
    var body = "";
    res.on("data",function (data) {
        body += data;
    })
    res.on("end",function () {
       console.log(body)
    })
}

var req = http.request(option,callback);
req.end();