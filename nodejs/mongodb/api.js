var express = require('express');
var mongodb = require('mongodb');
var parser = require('body-parser');
var app = express();
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //new line added
var client = mongodb.MongoClient;
const DATABASE_NAME = "frontend31";
var database_url = "mongodb://0.0.0.0:27017/" + DATABASE_NAME;
const ROUTE = "/object";
let getObject = function(request,response) {
    response.send('request received for get')
}
let insertObject = function (request, response) {
    client.connect(database_url, function (error, database) {
        if (error != null) {
            console.log(error);
        }
        else 
        {
            let db = database.db();
            let data = request.body;
            console.log(data);
            db.collection('myobjects').insertOne(data);
            response.json([{'error':'no','message':'object added'}]);
        }
    });
}
let updateObject = function (request, response) {
    response.send('request received for put')
}
let deleteObject = function (request, response) {
    response.send('request received for delete')
}
app.get(ROUTE,(request,response) => getObject(request,response));
app.post(ROUTE,(request,response) => insertObject(request,response));
app.put(ROUTE,(request,response) => updateObject(request,response));
app.delete(ROUTE,(request,response) => deleteObject(request,response));

app.listen(5000);
console.log('ready to accept request...');