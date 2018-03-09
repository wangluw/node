var http = require("http");

var url = require("url");

var util = require("util");

//获取get请求内容
http.createServer(function (req,res) {
    res.writeHeader(200,{"Content-Type":"text/plain"});
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();
}).listen(3000);