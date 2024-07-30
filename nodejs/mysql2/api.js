var express = require('express');
var app = express();

// Middleware required to access input passed using post, put, delete 
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // New line added

const USER_ROUTE = "/users";
const PORTNO = 5000;

// Register
// Endpoint: http://localhost:5000/users
// Method: POST
let register = function (request, response) {
    response.send("register request received via post method");
}

app.post(USER_ROUTE + "/register", (request, response) => register(request, response));

// Login
// Endpoint: http://localhost:5000/users/login
// Method: POST
let login = function (request, response) {
    response.send("login request received via post method");
}

app.post(USER_ROUTE + "/login", (request, response) => login(request, response));

// Change Password
// Endpoint: http://localhost:5000/users/change_password
// Method: POST
let change_password = function (request, response) {
    response.send("change password request received via post method");
}

app.post(USER_ROUTE + "/change_password", (request, response) => change_password(request, response));

// Forgot Password
// Endpoint: http://localhost:5000/users/forgot_password
// Method: GET
let forgot_password = function (request, response) {
    response.send("forgot password request received via get method");
}

app.get(USER_ROUTE + "/forgot_password", (request, response) => forgot_password(request, response));

app.listen(PORTNO, () => {
    console.log('ready to accept request on port', PORTNO);
});
