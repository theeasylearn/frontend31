const getMissingFields = function (body, requiredFields) {
    return requiredFields.filter(field => !body[field]);
};
module.exports.getMissingFields = getMissingFields;
