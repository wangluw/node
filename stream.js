//流

//读取流
// var fs = require("fs");
// var data = "";
//
// var readStream = fs.createReadStream("input.txt");
//
// // 设置编码为 utf8。
// readStream.setEncoding("UTF8");
//
// //执行
// readStream.on("data",function(chunk){
//     data += chunk;
// })
// // 结束
// readStream.on("end",function(){
//     console.log(data);
// })
// // 出错
// readStream.on("error",function(err){
//     console.log(err)
// })

//写入流
// var fs = require("fs");
// var data = "1314111";
//
// var writerStream = fs.createWriteStream("input.txt");
//
// // 设置编码为 utf8。
// writerStream.write(data,"UTF8");
//
// // 标记文件末尾
// writerStream.end();
//
// // 处理流事件 --> data, end, and error
// writerStream.on('finish', function() {
//     console.log("写入完成。");
// });
//
// writerStream.on('error', function(err){
//     console.log(err.stack);
// });

//通道流  从读到写
// var fs = require("fs");
//
// // 创建一个可读流
// var readerStream = fs.createReadStream('input.txt');
//
// // 创建一个可写流
// var writerStream = fs.createWriteStream('output.txt');
//
// // 管道读写操作
// // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
// readerStream.pipe(writerStream);
//
// console.log("程序执行完毕");

//链式流
// var fs = require("fs");
// <!--压缩模块-->
// var zlib = require("xlib");
// fs.createReadStream('input.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('input.txt'));
//
// console.log("文件解压完成。");

