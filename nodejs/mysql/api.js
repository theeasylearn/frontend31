// this file is only used to define routes
var express = require("express")
var bodyParser = require("body-parser");
var cors = require("cors"); // Add this line
var path = require("path");
var multer = require("multer");

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
var storage = multer.diskStorage({
    //destination property is used to provide relative path where files will be uploaded
    destination: function (req, file, cb) {
        //2nd argument in cb is relative path where files will be uploaded
        cb(null, "images/");
        console.log('destination ', file);
    },
    //filename propety is used to give unique file name to uploaded file
    filename: function (req, file, cb) {
        //2nd argument in cb is filename which has 2 part. 1st part is original file name and 2nd part is Date.now() means unique timestamp
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
        console.log('filename ', file.fieldname);

    },
});

const maxSize = 3 * 1024 * 1024; //maximum filesize is 3 mb. which you can change
var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb) {
        var filetypes = /jpeg|jpg|png|webp|bmp/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: File upload only supports the " + "following filetypes - " + filetypes);
    },
});


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
app.post('/doctor_profile', upload.single("photo"), (request, response) => doctor.profile(request, response));
app.post(ADMIN_ROUTE, (request, response) => admin.select(request, response));
app.listen(PORTNO);
console.log('ready to accept request');