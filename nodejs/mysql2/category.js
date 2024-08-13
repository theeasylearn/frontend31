var connection = require("./connection");
var common = require('./common');
// create all the functions to handle request for category 
module.exports.select = function (request, response) {
    let sql = "select * from category where isdeleted=0 order by id desc";
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
    //console.log(request.body);
    var requiredFields = ['id', 'title', 'islive'];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([
            { error: `Missing fields: ${missingFields.join(',')}` },
        ]);
    }
    else {
        var { title, islive, id } = request.body;
        var photo = 'new_photo.jpeg';
        var sql = "update category set title=?,photo=?,islive=? where id=?";
        var data = [title, photo, islive, id];

        connection.db.query(sql, data, function (error, result) {
            if (error != null)
                response.json([{ 'error': "error occured" }]);
            else
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'category updated' }]);
        });
    }

}

module.exports.Delete = function (request, response) {
    var requiredFields = ['id'];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([
            { error: `Missing fields: ${missingFields.join(',')}` },
        ]);
    }
    else {
        var { id } = request.body;
        var sql = "update category set isdeleted=1 where id=?";
        var data = [id];

        connection.db.query(sql, data, function (error, result) {
            if (error != null)
                response.json([{ 'error': "error occured" }]);
            else
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'category deleted' }]);
        });
    }
}
