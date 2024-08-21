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
                    var grandtotal = 0;
                    orderdetail.map((item) => {
                        grandtotal+= (item.price * item.quantity);
                    });
                    //reduce the stock of items given in order 
                    orderdetail.map((item) => {
                        sql = `update product set stock=stock-${item.quantity} where id=${item.id}`;
                        connection.db.query(sql,function(error,result2){
                            if (error) {
                                response.json([{ 'error': 'error occured' }]);
                                console.log(error);
                            }
                        })
                    });
                    // insert new record into bill table 
                    sql = "INSERT INTO `bill`(`usersid`, `fullname`, `address1`, `address2`, `mobile`, `city`, `pincode`,`amount`, `remarks`) VALUES (?,?,?,?,?,?,?,?,?)";
                    let data2 = [usersid, fullname, address1, address2, mobile, city, pincode, grandtotal,remarks];
                    connection.db.query(sql,data2,function(error,result2){
                        if (error) {
                            response.json([{ 'error': 'error occured' }]);
                            console.log(error);
                        }
                        else 
                        {
                            //update cart 
                            orderdetail.map((item) => {
                                let billid = result2.insertId; 
                                console.log(result2);
                                sql = `update cart set billid=${billid},price=${item.price} where billid=0 and productid=${item.id} and usersid=${item.usersid}`;
                                connection.db.query(sql, function (error, result2) {
                                    if (error) {
                                        response.json([{ 'error': 'error occured' }]);
                                        console.log(error);
                                    }
                                });
                            });
                            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'new order created with order id' + billid }]);
                        }
                    })
                    
                }
            }
        });
    }
}