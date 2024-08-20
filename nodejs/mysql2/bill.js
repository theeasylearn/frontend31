var connection = require("./connection");
var common = require('./common');
module.exports.insert = function (request, response) {
    let requiredFields = ['usersid','fullname','address1','address2','city','pincode','paymentmode','remarks','mobile'];

    let missingFields = common.getMissingFields(request.body,requiredFields);
    if(missingFields.length>=1)
    {
        response.json([{'error':'following inputs are missing ' + missingFields.join(",")}])
    }
    else 
    {
        let {usersid,fullname,address1,address2,city,pincode,paymentmode,remarks,mobile} = request.body;
        let sql = "select p.id,title,p.price,stock,quantity from product p, cart c where usersid=? and c.productid=p.id";
        let data = [usersid];
        connection.db.query(sql,data,function(error,result){
            if (error) {
                response.json([{ 'error': 'error occured' }]);
                console.log(error);
            }
            else {
                //1) check all the items in order are in stock or not 
                let orderdetail = [...result]; 
                let outofstock = [];
                
                outofstock = orderdetail.filter((item) => {
                    if(item.stock<item.quantity)
                        return item;    
                });

                if(outofstock.length>=1)
                {
                    console.log(outofstock);
                    let titles = outofstock.map(item => item.title).join(', ');
                    response.json([{ 'error': 'no' }, { 'success': 'no' }, { 'message': 'following items are not in stock \n' + titles}]);
                }    
                else 
                {
                    //calculate total bill amount 
                    let grandtotal = 0;
                    orderdetail.map((item) => {
                        grandtotal+= (item.price * item.quantity);
                    });
                    response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'all products are available in stock' + grandtotal }]);
                }
            }
        });
    }
}