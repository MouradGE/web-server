module.exports = {
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
