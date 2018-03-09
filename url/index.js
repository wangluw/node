var server = require("./jiexiurl");
var router = require("./router");


server.start(router.route);