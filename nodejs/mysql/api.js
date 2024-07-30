// this file is only used to define routes
var express = require('express');
var parser = require('body-parser');

//import local modules
var users = require("./users");
var admin = require('./admin');
var cors = require('cors');
var app = express();
app.use(cors());
//middleware are required to access input passed using post,put,delete 
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //new line added

const ROUTE = "/patient";
const ADMIN_ROUTE = "/patient";
const PORTNO = 5000;
//define routes
//register
app.post(ROUTE,(request,response) => users.insert(request,response));

//change password
app.put(ROUTE,(request,response) => users.update(request,response));
app.put(ADMIN_ROUTE,(request,response) => admin.update(request,response));


//forgot password
app.get('/patient_forgot_password', (request, response) => users.forgot_password(request, response));
app.get('/admin_forgot_password', (request, response) => admin.forgot_password(request, response));

app.post('/patient_login', (request, response) => users.select(request, response));
app.post(ADMIN_ROUTE, (request, response) => admin.select(request, response));
app.listen(PORTNO);
console.log('ready to accept request');