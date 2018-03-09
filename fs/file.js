var fs = require("fs");
var buf = new Buffer(1024);
//异步打开文件
console.log("准备打开文件");

fs.open("input.txt","r+",function (err,fd) {
    if(err){
        return console.error(err);
    }
    console.log("文件打开成功"+fd);
    // 截取文件
    fs.ftruncate(fd, 10, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("文件截取成功。");
        console.log("读取相同的文件");
        //异步对文件
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
            console.log(bytes + "字节被读取");

            if (bytes > 0) {
                console.log(buf.slice(0, 100).toString())
            }
            // 关闭文件
            fs.close(fd, function (err) {
                if (err) {
                    console.log(err);
                }
                console.log("文件关闭成功");
            });
        })
    })

})
//获取文件信息
fs.stat("input.txt",function (err,stats) {
    console.log(stats.isFile())
})
// stats.isFile()	如果是文件返回 true，否则返回 false。
// stats.isDirectory()	如果是目录返回 true，否则返回 false。
// stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
// stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
// stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
// stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
// stats.isSocket()	如果是 Socket 返回 true，否则返回 false。

//写入
