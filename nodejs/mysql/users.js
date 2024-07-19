require("./connection");
let insert = function(request,response){
    response.send('post request received');
}
let update = function(request,response) {
    response.send('put request received')
}
module.exports.insert = insert;
module.exports.update = update;