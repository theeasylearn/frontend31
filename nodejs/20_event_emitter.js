var http = require('http');
var event = require('events');
var mail = require('./MyMailer');
var em = new event.EventEmitter();
var mailer = new mail.MyMail();
em.on('register',function(receiver_email){
    mailer.send(receiver_email,'welcome email','it is welcome message');
});

em.addListener('register', function (receiver_email) {
    mailer.send(receiver_email, 'Product catelog', 'it is product catelog');
});
em.on('register', function (receiver_email) {
    mailer.send(receiver_email, 'Terms & condition', 'it is terms & condition');
});

var server = http.createServer(function(request,response){
    var url = request.url;
    if(url === '/register')
    {
        response.writeHead(200,{'content-type':'text/html'});
        response.write('registration successfull');
        response.end();
        em.emit('register','ankit3385@gmail.com');
    }    
});
server.listen(5000);
console.log('ready to accept request');