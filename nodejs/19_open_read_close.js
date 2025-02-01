var http = require('http');
var fs = require('fs');
const SIZE = 8192;
var server = http.createServer(function(request,response){
    var filename = 'ramayan.txt';
    //open file 
    fs.open(filename,'r',function(error,fp){
        var buffer = new Buffer.alloc(SIZE);
        fs.read(fp,buffer,0,SIZE,0,function(error,count){
            if(error!=null)
                response.write('could not read data from file');
            else 
            {
                response.write(buffer.toString().substr(0,count));
            }
            fs.close(fp);
            response.end();
        });
    });
});
server.listen(5000);
console.log('ready to accept request...');