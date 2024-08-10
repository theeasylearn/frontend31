var express = require('express');
var cors = require('cors');
// import local module
var users = require('./users');
var category = require('./category');
var app = express();
// Middleware required to access input passed using post, put, delete 
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // New line added
app.use(cors());
const USER_ROUTE = "/users";
const CATEGORY_ROUTE = "/category";
const PORTNO = 5000;

// Register
// Endpoint: http://localhost:5000/users/register
// Method: POST
//input email=krish@gmail.com&password=159753&mobile=2589631470
//all inputs are required
app.post(USER_ROUTE + "/register", (request, response) => users.register(request, response));

// Login
// Endpoint: http://localhost:5000/users/login
// Method: POST
//input (required)
//email=ankit@gmail.com&password=123123

app.post(USER_ROUTE + "/login", (request, response) => users.login(request, response));

// Change Password
// Endpoint: http://localhost:5000/users/change_password
// Method: POST

app.post(USER_ROUTE + "/change_password", (request, response) => users.change_password(request, response));

// Forgot Password
// Endpoint: http://localhost:5000/users/forgot_password
// Method: GET


app.get(USER_ROUTE + "/forgot_password", (request, response) => users.forgot_password(request, response));

//define routes for category
//used to get all categories 
//http://localhost:5000/category
//method get 

app.get(CATEGORY_ROUTE,(request,response) => category.select(request,response));
//used to insert new cateory
//http://localhost:5000/category
//method post 

app.post(CATEGORY_ROUTE,(request,response) => category.insert(request,response));

//used to update existing cateory
//http://localhost:5000/category
//method put 
app.put(CATEGORY_ROUTE,(request,response) => category.update(request,response));

//used to delete existing cateory
//http://localhost:5000/category
//method delete 
app.delete(CATEGORY_ROUTE,(request,response) => category.Delete(request,response));

app.listen(PORTNO, () => {
    console.log('ready to accept request on port', PORTNO);
});
