var express = require('express');
var app = express();
const ROUTE = '/contact';
var mycontacts = [
    {'name':'ram','mobile':'1234567890'},
    {'name':'shiv','mobile':'1122334455'},
    {'name':'mohan','mobile':'1234512345'},
]
app.get(ROUTE,function(request,response){
    response.json(mycontacts);
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