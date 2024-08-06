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

module.exports.insert = insert;
module.exports.select = select;