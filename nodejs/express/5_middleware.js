var express = require('express');
var now = require('./mydatetime');
var app = express();
const ROUTE = '/contact';
//create middleware
app.use(function(request,response,next){
    console.log('time checking middleware');
    let hour = now.getHour();
    if(hour>=0 && hour<=9)
        response.send('you can not access between 12 am to 11 am');
    else 
        next();
});

app.use(function (request, response, next) {
    console.log('second middleware');
    let method = request.method;
    let url = request.url;
    let currentdatetime = now.getDateTime();
    let ip = request.ip;
    console.log(method,url,currentdatetime,ip);
    
    next();
});
app.get(ROUTE, function (request, response) {
    response.send('get request received for contact route');
});

app.post(ROUTE, function (request, response) {
    response.send('post request received for contact route');
});

app.put(ROUTE, function (request, response) {
    response.send('put request received for contact route');
});

app.delete(ROUTE, function (request, response) {
    response.send('delete request received for contact route');
});

app.listen(5000);
console.log('ready to accept request');