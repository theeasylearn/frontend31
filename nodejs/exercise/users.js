var connection = require ('./connection');
let register = function (request, response) {
    let {email,password , mobile } = request.body ;
    if(email === undefined || password === undefined || mobile === undefined)
    {
        response.json([{"error" : 'input is missing'}]);
    }
    else
    {
        let sql = `insert into users (email,password,mobile) values ('${email}','${password}','${mobile}')`;
        
        connection.db.query(sql , function(error,result){
            if(error)
                response.json([{ 'error': 'error occured'}]);
            else
            {
                response.json([{ 'error': 'no'} , { 'success' : 'yes'},{'message': 'register successfully'}]);
            }
        });
        
    }

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
module.exports.register = register ;
module.exports.login = login ;
module.exports.change_password = change_password;
module.exports.forgot_password = forgot_password ;