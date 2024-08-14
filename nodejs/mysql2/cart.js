var connection = require("./connection");
var common = require('./common');
module.exports.select = function (request, response) {
    let sql = `select c.id,quantity,title,photo,p.price from cart c,product p where usersid=? and billid=0 and c.productid=p.id`;
    let usersid = request.param.userid;
    let data = [usersid];
    connection.db.query(sql, function (error, result) {
        if (error != null)
            response.json([{ 'error': "error occured" }]);
        else {
            result.unshift({ 'total': result.length });
            result.unshift({ 'error': 'no' });
            response.send(result);
        }
    });
}
module.exports.insert = function (request, response) {
    let {productid,userid} = request.body;
    let sql = `INSERT INTO cart (productid, quantity, price, usersid, billid)
    VALUES (?, 1, 0, ?, 0)
    ON DUPLICATE KEY UPDATE 
    quantity = quantity + 1` 
    let data = [productid,userid];
    connection.db.query(sql,data,function(error,result){
        if(error)
        {
            response.json([{ 'error': 'error occured' }]);
            console.log(error);
        }
        else 
            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'cart updated' }]);
    });
}
module.exports.update = function (request, response) {

}
module.exports.delete = function (request, response) {
    let sql = `delete from cart where id=?`;
    let id = request.body.id;
    let data = [id];
    connection.db.query(sql,data,function(error,result){
        if(error)
        {
            response.json([{ 'error': 'error occured' }]);
            console.log(error);
        }
        else 
        {
            response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'cart deleted' }]);
        }
    });

}