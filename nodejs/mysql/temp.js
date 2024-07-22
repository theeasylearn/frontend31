

let insert = function(request, response) {
    let { name, email, password, mobileno, city, address, bloodgroup, dob, gender } = request.body;

    const requiredFields = ['name', 'email', 'password', 'mobileno', 'city', 'address', 'bloodgroup', 'dob', 'gender'];
    const missingFields = getMissingFields(request.body, requiredFields);

    if (missingFields.length > 0) {
        response.json({
            error: 'yes',
            success: 'no',
            message: `Missing fields: ${missingFields.join(',')}`
        });
        return;
    }
    else 
    let sql = `insert into register_user (name, email, password, mobileno, city, address, bloodgroup, dob, gender) 
               values ('${name}', '${email}', '${password}', '${mobileno}', '${city}', '${address}', '${bloodgroup}', '${dob}', '${gender}')`;

    connection.db.query(sql, function(error, result) {
        if (error != null
