var connection = require("./connection");
const getMissingFields = (body, requiredFields) => {
    return requiredFields.filter(field => !body[field]);
};

let insert = function(request,response){
    let { name, email, password, mobileno, city, address, bloodgroup, dob, gender } = request.body; //object destructring 
  
    let sql = `insert into register_user (name,email,password,mobileno,city,address,bloodgroup,dob,gender) values ('${name}','${email}','${password}','${mobileno}','${city}','${address}','${bloodgroup}','${dob}','${gender}')`;

    connection.db.query(sql,function(error,result){
        if(error!=null)
        {
            if (error.code === 'ER_DUP_ENTRY')
            {
                response.json("[{'error':'no'},{'success':'no'},{'message':'email/mobile is already regisered with us'}]");
            }    
            else 
            {
                response.json("[{'error':'no'},{'success':'no'},{'message':'something went wrong, please try after someimes'}]");
            }
            console.log(error);
        }    
        else 
        {
            response.json("[{'error':'no'},{'success':'yes'},{'message':'registered successfully'}]");
        }
    });    
}
let update = function(request,response) {
    response.send('put request received')
}
module.exports.insert = insert;
module.exports.update = update;