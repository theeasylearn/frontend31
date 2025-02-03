var express = require('express');
var app = express();
const ROUTE = '/contact';
app.get(ROUTE,function(request,response){
    response.send('get request received for contact route');
});

app.post(ROUTE,function(request,response){
    response.send('post request received for contact route');
});

app.put(ROUTE,function(request,response){
    response.send('put request received for contact route');
});

app.delete(ROUTE, function (request, response) {
    response.send('delete request received for contact route');
});

const PORTNO = 5000;
app.listen(PORTNO,function(error){
    if(error)
        console.log(error);
    else 
        console.log('server is ready to accept request...');
})