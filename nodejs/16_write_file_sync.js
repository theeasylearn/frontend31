var http = require('http');
var url = require('url');
var fs = require('fs');

//http://localhost:5000/friends.txt?name1=ram&name2=krishna;
var server = http.createServer(function(request,response)
{
    var requested_url = url.parse(request.url,true);
    var filename = requested_url.pathname.substring(1); // /friends.txt
    console.log(filename);
    var data = requested_url.query; //{name1:'ram',name2:'krishna'}
    var output = '';

    // console.log(operation);
    // console.log(data);
    if(data.name1 === undefined || data.name2 === undefined)
    {
        output = 'input is missing';
    }    
    else 
    {
        output = `name1 = ${data.name1} name2 =  ${data.name2} \n`;
        fs.writeFileSync(filename,output,'utf-8');
        response.write('Content added into file');
        response.end();
    }
});
server.listen(5000);
console.log('ready to accept request...');