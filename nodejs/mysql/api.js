// this file is only used to define routes
var express = require('express');
var parser = require('body-parser');
var users = require("./users");
var app = express();
//middleware are required to access input passed using post,put,delete 
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //new line added

const ROUTE = "/patient";
const PORTNO = 5000;
//define routes
//register
app.post(ROUTE,(request,response) => users.insert(request,response));

//change password
app.put(ROUTE,(request,response) => users.update(request,response));

app.listen(PORTNO);
console.log('ready to accept request');