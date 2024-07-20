var mysql = require('mysql');
var settings = {
    database : 'doctor',
    user: 'root',
    password:'',
    port:3308,
    host:'localhost'
};
var db = mysql.createConnection(settings);
db.connect(function(error){
    if(error)
    {
        console.log('error in establishing connection');
        console.log(error);
    }
    else 
        console.log('connection created');
});
module.exports.db = db;