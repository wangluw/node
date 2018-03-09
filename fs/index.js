var fs = require("fs");

//异步读取
fs.readFile("input.txt",function (err,data) {
    if(err){
        return console.log(err)
    }
    console.log("异步读取 "+data);
    fs.writeFile("ouput.txt",data+"123",function (err) {
        if(err){
            return console.error(err)
        }
        fs.readFile("ouput.txt",function (err,data) {
            console.log("异步读取 "+data);
        })
    })
})


fs.open("input.txt", "a+", function(err, fd){
    if (err) {
        return console.error(err);
    }
    fs.writeFile(fd, "bb", function(err){
        if (err){
            return console.error(err);
        }
    });
});

//同步读取

var data = fs.readFileSync("input.txt");
console.log("同步读取 " + data.toString())