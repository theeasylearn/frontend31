var express = require('express');
var parser = require('body-parser');
var app = express();
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //new line added

const ROUTE = '/contact';
var mycontacts = [
    {'name':'ram','mobile':'1234567890'},
    {'name':'shiv','mobile':'1122334455'},
    {'name':'mohan','mobile':'1234512345'},
]
//get method is used to fetch data
app.get(ROUTE,function(request,response){
    response.json(mycontacts);
});

//post method is used to insert new data
//localhost:5000/contact?name=ghanshyam&mobile=9998887771
app.post(ROUTE,function(request,response)
{
    let name = request.body.name;
    let mobile = request.body.mobile;
    let newcontact = {'name':name,'mobile':mobile};
    mycontacts.push(newcontact);
    response.send('new contact added');

});

//put method is used to update existing data
app.put(ROUTE,function(request,response){
    let name = request.body.name;
    let newname = request.body.newname;
    let newmobile = request.body.newmobile;
    let size = mycontacts.length;
    let index=0;
    for(index=0;index<size;index++)
    {
        //console.log(mycontacts[index].name, mycontacts[index].mobile);
        if (mycontacts[index].name === name)
        {
            mycontacts[index].name = newname;
            mycontacts[index].mobile = newmobile;
            break;
        }
    }   
    if (index < size)
        response.send('contact updated');
    else
        response.send('contact not found'); 
});

//delete method is used to delete data
app.delete(ROUTE, function (request, response) {
    let name = request.body.name;
    
    response.send('delete request received for contact route');
});

const PORTNO = 5000;
app.listen(PORTNO,function(error){
    if(error)
        console.log(error);
    else 
        console.log('server is ready to accept request...');
})