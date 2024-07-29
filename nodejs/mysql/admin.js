var connection = require("./connection");
//local module import
var common = require("./common.js");
module.exports.select = function(request,response){
    console.log('admin login request is received');
}
module.exports.forgot_password = function (request, response) {
    console.log('admin forgot_password request is received');
}
module.exports.update = function (request, response) {
    console.log('admin change_password request is received');
}
