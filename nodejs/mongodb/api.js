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
//required input
//city=bhavnagar&newcity=baroda&newpincode=364002
let updateObject = function (request, response) {
    if(request.body.city === undefined || request.body.newcity === undefined || request.body.newpincode === undefined)
    {
        response.json([{ 'error': 'input is missing'}]);

    }
    else 
    {
        dbPromise.then((database) => {
            let condition = { 'city': request.body.city };
            let updatedDocument = { $set: { city: request.body.newcity, pincode: request.body.newpincode } };
            database.collection('myobjects').updateMany(condition, updatedDocument, function (error, result) {
                response.json([{ 'error': 'no', 'message': 'object updated' }]);
            });
        }).catch((error) => {
            response.json([{ 'error': 'yes', 'message': 'error in connection' }]);
        })
    }
}

//required input
//team=afghanistan
let deleteObject = function (request, response) {
    dbPromise.then((database) => {

        var condition = {'team':request.body.team};
        database.collection('myobjects').deleteMany(condition,function(error,result){
           if(error)
               response.json([{ 'error': 'error in delete'}]);
           else 
               response.json([{ 'error': 'no', 'message': 'object deleted' }]);
        })
    }).catch((error) => {
        response.json([{ 'error': 'yes', 'message': 'error in connection' }]);
    })
}
app.get(ROUTE,(request,response) => getObject(request,response));
app.post(ROUTE,(request,response) => insertObject(request,response));
app.put(ROUTE,(request,response) => updateObject(request,response));
app.delete(ROUTE,(request,response) => deleteObject(request,response));

app.listen(5000);
console.log('ready to accept request...');