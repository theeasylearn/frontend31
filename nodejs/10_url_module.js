var http = require('http');
var url = require('url');
//http://localhost:5000/add?num1=10&num2=20;
//http://localhost:5000/sub?num1=10&num2=20;
//http://localhost:5000/mul?num1=10&num2=20;
//http://localhost:5000/div?num1=10&num2=20;
var server = http.createServer(function(request,response)
{
    var requested_url = url.parse(request.url,true);
    var operation = requested_url.pathname;
    var data = requested_url.query;
    var output = 'invalid operation';

    // console.log(operation);
    // console.log(data);
    if(data.num1 === undefined || data.num2 === undefined)
    {
        output = 'input is missing';
    }    
    else 
    {
        var num1 = parseInt(data.num1);
        var num2 = parseInt(data.num2);
        if (operation === '/add') {
            output = 'addition =  ' + (num1 + num2);
        }
        else if (operation === '/sub') {
            output = 'subtraction =  ' + (num1 - num2);
        }
        else if (operation === '/mul') {
            output = 'multiplication =  ' + (num1 * num2);
        }
        else if (operation === '/div') {
            output = 'division =  ' + (num1 / num2).toFixed(2);
        }
    }
    response.write(output);
    response.end();
    // console.log(output);
});
server.listen(5000);
console.log('ready to accept request...');