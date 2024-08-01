// this file is only used to define routes
var express = require("express")
var bodyParser = require("body-parser");
var cors = require("cors"); // Add this line
var cors = require('cors');

//import local modules
var users = require("./users");
var admin = require('./admin');

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    // Update with your React.js app's origin
    optionsSuccessStatus: 200,
}));


const ROUTE = "/patient";
const ADMIN_ROUTE = "/admin";
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