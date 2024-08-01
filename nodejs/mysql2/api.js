var express = require('express');
// import local module
var users = require('./users');
var app = express();
// Middleware required to access input passed using post, put, delete 
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // New line added

const USER_ROUTE = "/users";
const PORTNO = 5000;

// Register
// Endpoint: http://localhost:5000/users/register
// Method: POST
app.post(USER_ROUTE, (request, response) => users.register(request, response));

// Login
// Endpoint: http://localhost:5000/users/login
// Method: POST


app.post(USER_ROUTE + "/login", (request, response) => users.login(request, response));

// Change Password
// Endpoint: http://localhost:5000/users/change_password
// Method: POST

app.post(USER_ROUTE + "/change_password", (request, response) => users.change_password(request, response));

// Forgot Password
// Endpoint: http://localhost:5000/users/forgot_password
// Method: GET


app.get(USER_ROUTE + "/forgot_password", (request, response) => users.forgot_password(request, response));

app.listen(PORTNO, () => {
    console.log('ready to accept request on port', PORTNO);
});
