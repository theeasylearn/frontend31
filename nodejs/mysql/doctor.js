var connection = require("./connection");
//local module import
var common = require("./common.js");
let insert = function (request, response) {
    console.log(request.body);
    let { name, email, mobile, regno, password } = request.body;

    const requiredFields = ['name', 'email', 'mobile', 'regno', 'password'];
    const missingFields = common.getMissingFields(request.body, requiredFields);

    if (missingFields.length > 0) {
        response.json([
            { error: `Missing fields: ${missingFields.join(',')}` },
        ]);
        return;
    } else {
        let sql = `INSERT INTO doctor (name, email, contactno, regno, password) VALUES ('${name}', '${email}', '${mobile}', '${regno}', '${password}')`;

        connection.db.query(sql, function (error, result) {
            if (error != null) {
                if (error.code === 'ER_DUP_ENTRY') {
                    response.json([
                        { error: 'no' },
                        { success: 'no' },
                        { message: 'email/mobile is already registered with us' }
                    ]);
                } else {
                    response.json([
                        { error: 'no' },
                        { success: 'no' },
                        { message: 'something went wrong, please try after some time' }
                    ]);
                }
                console.log(error);
            } else {
                response.json([
                    { error: 'no' },
                    { success: 'yes' },
                    { message: 'registered successfully' }
                ]);
            }
        });
    }
}

let select = function (request, response) {
    console.log(request.body);
    var requiredFields = ['email', 'password'];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length > 0) {
        let temp = 'Missing fields: ' + missingFields.join(',');
        response.json([{ error: temp }]);
    } else {
        let { email, password } = request.body;
        let sql = `select id from doctor where email='${email}' and password='${password}'`;
        console.log(sql);
        connection.db.query(sql, function (error, result) {
            if (error != null)
                response.json([{ error: 'error occured' }]);
            else {
                if (result.length === 0) {
                    response.json([
                        { error: 'no' },
                        { success: 'no' },
                        { message: 'invalid login attempt' }
                    ]);
                } else {
                    response.json([
                        { error: 'no' },
                        { success: 'yes' },
                        { message: 'login successfully' },
                        { id: result[0]['id'] },
                    ]);
                }
            }
        });
    }
}
let profile = function (request, response) {
    console.log(request.body);
    // console.log(qualification, city, address, gender, dob, website, photo);
    let { qualification, city, address, dob, website, gender, doctor_id } = request.body;

    const requiredFields = ['qualification', 'city', 'address', 'dob', 'website', 'gender', 'doctor_id'];
    const missingFields = common.getMissingFields(request.body, requiredFields);

    if (missingFields.length > 0) {
        response.json([
            { error: `Missing fields: ${missingFields.join(',')}` },
        ]);
        return;
    } else {
        if (request.file) {
            let sql = `update doctor set qualification='${qualification}',city='${city}',address='${address}',dob='${dob}',website='${website}',gender='${gender}',photo='${request.file.filename}' where id='${doctor_id}'`;

            connection.db.query(sql, function (error, result) {
                if (error != null) {

                    response.json([
                        { error: 'no' },
                        { success: 'no' },
                        { message: 'something went wrong, please try after some time' }
                    ]);
                    console.log(error);
                } else {
                    response.json([
                        { error: 'no' },
                        { success: 'yes' },
                        { message: 'profile created/updated successfully' }
                    ]);
                }
            });
        }
        else 
        {
            response.json([{ 'error': 'could not upload file' }]);
        }
    }
}
module.exports.insert = insert;
module.exports.select = select;
module.exports.profile = profile;