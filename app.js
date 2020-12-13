console.log("Start");

var express = require("express");
var path = require("path");

routes = require("./routes")

var app = express();

var login = 0;

app.set("port", process.env.PORT || 3000);
app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.use(routes);

app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
});

module.exports = login;