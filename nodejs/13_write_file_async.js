var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
    let filename = 'content.txt';
    let content = "रात का समय था, गाँव के किनारे पर एक पुरानी, टूटी-फूटी हवेली स्थित थी जिसे भूतिया हवेली कहा जाता था, जहाँ एक युवक नाम के रवि ने डर के बावजूद हवेली का रहस्य जानने का निर्णय किया, और जब उसने हवेली की अंदरूनी सच्चाई जानी, तो उसे उन्हीं अत्यंत डरावनी घटनाओं का सामना करना पड़ा।";

    fs.writeFile(filename,content,function(error){
        response.writeHead(200, { 'content-type': 'text/html' });
        if(error)
        {
            response.write('<h1>error in writing in file </h1>');
            return response.end();
        }   
        else 
        {
            response.write('<h1>done </h1>');
            return response.end();
        } 
    });
});

server.listen(5000);
console.log('ready to accept request...');