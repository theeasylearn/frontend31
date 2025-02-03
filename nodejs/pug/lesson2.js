var express = require('express');
var app = express();
app.set("view engine", "pug");
app.set("views", "views");

//define route 
app.get("/about", function (request, response) {
    response.render('about');
});

app.get("/contact", function (request, response) {
    response.render('contact');
});
app.listen(5000);
console.log('ready to accept request...');