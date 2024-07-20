var connection = require("./connection");
let insert = function(request,response){
    let sql = "insert into register_user (name,email,password,mobileno,city,address,bloodgroup,dob,gender) values ('krish','krish@gmail.com','123123','11223344','bhavnagar','waghawadi road','b+','2004-12-15','1')";
    connection.db.query(sql,function(error,result){
        if(error!=null)
        {
            response.json("[{'error':'error occured'}]");
            console.log(error);
        }    
        else 
        {
            response.json("[{'error':'no'},{'message':'registered successfully'}]");
        }
    });    
}
let update = function(request,response) {
    response.send('put request received')
}
module.exports.insert = insert;
module.exports.update = update;