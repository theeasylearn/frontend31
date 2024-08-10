var connection = require("./connection");
var common = require('./common');
// create all the functions to handle request for category 
module.exports.select = function (request, response) {
    let sql = "select * from category order by id desc";
    connection.db.query(sql, function (error, result) {
        if (error != null)
            response.json([{ 'error': "error occured" }]);
        else
        {
            result.unshift({'total':result.length});
            result.unshift({'error':'no'});
            response.send(result);
        }
    });
}

module.exports.insert = function (request, response) {
    var requiredFields = ['title', 'islive'];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([
            { error: `Missing fields: ${missingFields.join(',')}` },
        ]);
    }
    else {
        let sql = `insert into category (title,photo,islive) values (?,?,?)`;
        let { title, islive } = request.body; //object destructring
        let photo = 'photo.jpeg';
        let data = [title, photo, islive];
        connection.db.query(sql, data, function (error, result) {
            if (error != null)
                response.json([{ 'error': "error occured" }]);
            else
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'category inserted' }]);
        });
    }

}

module.exports.update = function (request, response) {
    response.send('put request received for category');
}

module.exports.Delete = function (request, response) {
    response.send('delete request received for category');
}
