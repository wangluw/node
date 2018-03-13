var express = require("express");
var app = express();
var fs = require("fs");
var url = require("url");


app.get("/getuserlist",function (req,res) {
    res.setHeader('Content-Type','text/plain');
    res.setHeader('Access-Control-Allow-Origin',"*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    fs.readFile(__dirname + "/user.json", 'utf8' ,function (err,data) {
        if(err){
            console.log(err);
        }else{
            // console.log(data);
            res.end(data)
        }
    })
})

app.get("/adduser",function (req,res) {
    var params = url.parse(req.url, true).query;
    var user = "user" + params.id
    var addMsg = {
        "user4":{
            "name" : params.name,
            "password" : params.password,
            "profession" : params.profession,
            "id" : params.id
        }
    }
    // console.log(params)
    fs.readFile(__dirname + "/user.json","utf8",function (err,data) {
        data = JSON.parse( data );
        data["user4"] = addMsg["user4"];
    })
    res.end();
})

app.get("/:id",function (req,res) {
    fs.readFile(__dirname + "/user.json","utf8",function (err,data) {
        data = JSON.parse(data);
        var user = data["user"+req.params.id];
        // console.log(user);
        res.end(JSON.stringify(user));
    })
})

app.get("/deleteuser",function (req,res) {
    console.log(1)
    fs.readFile(__dirname + "/user.json","utf8",function (err,data) {
        data = JSON.parse(data);
        console.log(data);
        delete data["user" + 2];
        res.end( JSON.stringify(data));
    })
})

var server = app.listen("8081",function () {
    // console.log(1);
})
