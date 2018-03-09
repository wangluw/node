var fs = require("fs");

//删除问件
// fs.unlink("ouput.js",function (err,) {
//     if(err){
//         return console.log(err)
//     }
//     console.log("删除")
// })

// console.log("创建目录 /tmp/test/");
// fs.mkdir("./test/",function(err){
//     if (err) {
//         return console.error(err);
//     }
//     console.log("目录创建成功。");
// });

// console.log("查看 /tmp 目录");
// fs.readdir("./test/",function(err, files){
//     if (err) {
//         return console.error(err);
//     }
//     files.forEach( function (file){
//         console.log( file );
//     });
// });

console.log("准备删除目录 /tmp/test");
fs.rmdir("./test",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("读取 /tmp 目录");
    fs.readdir("./test",function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            console.log( file );
        });
    });
});