var express = require("express");
var app = express();
var PORT = 3000;
var middleware = {
    reqAuth : function (req, res, next) {
        console.log("Private route hit!");
        next();
    },
    logger : function (req, res, next) {
        var currentDate = new Date().toString();
        console.log("Request: " + req.method + " " + req.originalUrl + " on " + currentDate)
        next();
    }
}

app.use(middleware.logger);
app.use(express.static(__dirname + "/public"));

app.get("/about", middleware.reqAuth, function (req, res) {
    res.send("About Us");
});

app.listen(PORT, function () {
    console.log("Server starting at localhost:" + PORT)
});
