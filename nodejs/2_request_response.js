var http = require('http');
var server = http.createServer(function(request,response){
    console.log("I have recevied your request....");
});
server.listen(5000);
