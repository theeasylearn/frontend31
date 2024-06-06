var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    let requested_url = request.url; // /fruits.html
    let filename = requested_url.substring(1); // fruits.html
    try 
    {
        let FileContent = fs.readFileSync(filename);
        response.writeHead(200, { 'content-type': 'text/html' });
        response.write(FileContent);
        return response.end();
    }
    catch(error)
    {
        response.writeHead(404, { 'content-type': 'text/html' });
        response.write('<h1>File not found </h1>');
        return response.end();
    }
});

server.listen(5000);
console.log('ready to accept request...');