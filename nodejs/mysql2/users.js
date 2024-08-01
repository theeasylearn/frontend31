var connection = require("./connection");

let register = function (request, response) {
   let sql = `insert into users (email,password,mobile) values ('ram@gmail.com','123123','9876543210')`;
   connection.db.query(sql,function(error,result){
        if(error!=null)
        {
            response.json([{'error':"error occured"}]);
            console.log(error);
        }    
        else 
        {
            response.json([{'error':'no'},{'success':'yes'},{'message':'registered successfully'}]);
        }
   });
}
let login = function (request, response) {
    response.send("login request received via post method");
}
let change_password = function (request, response) {
    response.send("change password request received via post method");
}
let forgot_password = function (request, response) {
    response.send("forgot password request received via get method");
}
//export register function which is compursory
module.exports.register = register;
module.exports.login = login;
module.exports.change_password = change_password;
module.exports.forgot_password = forgot_password;