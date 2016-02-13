var express = require("express");
var middleware = require("./middleware.js");

var app = express();
var PORT = 3000;

app.use(middleware.logger);
app.use(express.static(__dirname + "/public"));

app.get("/about", middleware.reqAuth, function (req, res) {
    res.send("About Us");
});

app.listen(PORT, function () {
    console.log("Server starting at localhost:" + PORT)
});
