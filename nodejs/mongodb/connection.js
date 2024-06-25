var mongodb = require('mongodb');
var client = mongodb.MongoClient;
const DATABASE_NAME = "frontend31";
var database_url = "mongodb://0.0.0.0:27017/" + DATABASE_NAME;
let db;
client.connect(database_url,function(error,database){
    if(error!=null)
    {
        console.log(error);
    }
    else 
    {
        console.log('connection created....');
        db = database.db();
    }
});
module.exports.db = db;