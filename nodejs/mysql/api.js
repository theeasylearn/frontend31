// this file is only used to define routes
var express = require("express")
var bodyParser = require("body-parser");
var cors = require("cors"); // Add this line
//import local modules
var users = require("./users");
var admin = require('./admin');
var doctor = require('./doctor');

var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const ROUTE = "/patient";
const ADMIN_ROUTE = "/admin";
const DOCTOR_ROUTE = "/doctor";
const PORTNO = 5000;
//define routes
//register
app.post(ROUTE,(request,response) => users.insert(request,response));
app.post(DOCTOR_ROUTE,(request,response) => doctor.insert(request,response));

//change password
app.put(ROUTE,(request,response) => users.update(request,response));
app.put(ADMIN_ROUTE,(request,response) => admin.update(request,response));


//forgot password
app.get('/patient_forgot_password', (request, response) => users.forgot_password(request, response));
app.get('/admin_forgot_password', (request, response) => admin.forgot_password(request, response));

app.post('/patient_login', (request, response) => users.select(request, response));
app.post('/doctor_login', (request, response) => doctor.select(request, response));
app.post('/doctor_profile', (request, response) => doctor.profile(request, response));
app.post(ADMIN_ROUTE, (request, response) => admin.select(request, response));
app.listen(PORTNO);
console.log('ready to accept request');