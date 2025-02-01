var express = require('express');
var users = require ('./users');
var app = express();
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

const USER_ROUTE = "./users";
const PORTNO = 5000 ;

app.post(USER_ROUTE + "/register", (request , response) => users.register(request,response));

app.post(USER_ROUTE + "/login", (request, response) => users.login(request, response));

app.post(USER_ROUTE + "/change_password", (request, response) => users.change_password(request, response));

app.post(USER_ROUTE + "/forgot_password", (request, response) => users.forgot_password(request, response));

app.listen (PORTNO , () => {
    console.log("ready to request on port" , PORTNO );
});

