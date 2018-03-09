var http = require("http");

var querystring = require("querystring");

http.createServer(function (req,res) {
    //暂存请求体信息
    var post = "";
    //通过req的data事件，每次接受请求体的信息就储存在post中
    req.on("data",function (chunk) {
        post += chunk;
    })
    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on("end",function () {
        post = querystring.parse(post);
        res.end(util.inspect(post));
    })

}).listen(3000);