var connection = require("./connection");
var common = require('./common');
module.exports.select = function (request, response) {

}
module.exports.insert = function (request, response) {
    let sql = `INSERT INTO cart (productid, quantity, price, userid, billid)
    VALUES (?, 1, 0, ?, 0)
    ON DUPLICATE KEY UPDATE 
    quantity = CASE 
            WHEN billid != 0 THEN quantity + 1 
            ELSE quantity 
            END;`
    let data = [productid,userid];
    
}
module.exports.update = function (request, response) {

}
module.exports.delete = function (request, response) {

}