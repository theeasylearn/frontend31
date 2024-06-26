var express = require('express');
var mongodb = require('mongodb');
var parser = require('body-parser');
var { dbPromise } = require('./connection');
var app = express();
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //new line added
var client = mongodb.MongoClient;
const ROUTE = "/object";
let getObject = function(request,response) {
    response.send('request received for get')
}
let insertObject = function (request, response) {
    dbPromise.then((database) => {
        let data = request.body;
        console.log(data);
        database.collection('myobjects').insertOne(data);
        response.json([{ 'error': 'no', 'message': 'object added' }]);

    }).catch((error) => {
        response.json([{ 'error': 'yes', 'message': 'error in connection' }]);
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