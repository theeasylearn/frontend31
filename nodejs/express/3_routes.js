var express = require('express');
var parser = require('body-parser');
var app = express();
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //new line added

const ROUTE = '/contact';
var mycontacts = [
    { "id": 1, "name": "ram", "mobile": "1234567890", "email": "ram@example.com", "city": "CityA" },
    { "id": 2, "name": "shiv", "mobile": "1122334455", "email": "shiv@example.com", "city": "CityA" },
    { "id": 3, "name": "mohan", "mobile": "1234512345", "email": "mohan@example.com", "city": "CityA" },
    { "id": 4, "name": "sita", "mobile": "1234567891", "email": "sita@example.com", "city": "CityA" },
    { "id": 5, "name": "gita", "mobile": "1234567892", "email": "gita@example.com", "city": "CityA" },
    { "id": 6, "name": "hari", "mobile": "1234567893", "email": "hari@example.com", "city": "CityA" },
    { "id": 7, "name": "rita", "mobile": "1234567894", "email": "rita@example.com", "city": "CityA" },
    { "id": 8, "name": "nita", "mobile": "1234567895", "email": "nita@example.com", "city": "CityA" },
    { "id": 9, "name": "amit", "mobile": "1234567896", "email": "amit@example.com", "city": "CityA" },
    { "id": 10, "name": "vijay", "mobile": "1234567897", "email": "vijay@example.com", "city": "CityA" },
    { "id": 11, "name": "kiran", "mobile": "1234567898", "email": "kiran@example.com", "city": "CityA" },
    { "id": 12, "name": "arjun", "mobile": "1234567899", "email": "arjun@example.com", "city": "CityA" },
    { "id": 13, "name": "suman", "mobile": "1234567800", "email": "suman@example.com", "city": "CityA" },
    { "id": 14, "name": "rekha", "mobile": "1234567801", "email": "rekha@example.com", "city": "CityA" },
    { "id": 15, "name": "krishna", "mobile": "1234567802", "email": "krishna@example.com", "city": "CityA" },
    { "id": 16, "name": "radha", "mobile": "1234567803", "email": "radha@example.com", "city": "CityA" },
    { "id": 17, "name": "lalit", "mobile": "1234567804", "email": "lalit@example.com", "city": "CityA" },
    { "id": 18, "name": "meenakshi", "mobile": "1234567805", "email": "meenakshi@example.com", "city": "CityA" },
    { "id": 19, "name": "suresh", "mobile": "1234567806", "email": "suresh@example.com", "city": "CityA" },
    { "id": 20, "name": "geeta", "mobile": "1234567807", "email": "geeta@example.com", "city": "CityA" }
]

//get method is used to fetch single contact
//localhost:5000/contact/1
//to fetch all contact
//localhost:5000/contact
app.get(ROUTE + "/:contactid?", function (request, response) {
    let contactid = request.params.contactid;
    if(contactid === undefined)
        response.json(mycontacts);
    else 
    {
        
    }
});

const PORTNO = 5000;
app.listen(PORTNO, function (error) {
    if (error)
        console.log(error);
    else
        console.log('server is ready to accept request...');
})