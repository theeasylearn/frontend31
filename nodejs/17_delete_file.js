var http = require('http');
var url = require('url');
var fs = require('fs');

//http://localhost:5000/friends.txt
var server = http.createServer(function (request, response) {
    var requested_url = url.parse(request.url, true);
    var filename = requested_url.pathname.substring(1); // /friends.txt
    console.log(filename);
    fs.unlink(filename, function (error) {
        if (error) {
            response.write('file could not be deleted');
            response.end();
        }
        else {
            response.write('file deleted successfully');
            response.end();
        }
    });

});
server.listen(5000);
console.log('ready to accept request...');