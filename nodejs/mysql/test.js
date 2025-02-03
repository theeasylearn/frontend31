const generatePassword = require('./password_generators.js');

const passwordLength = 20; // Specify the desired password length
const password = generatePassword(passwordLength);

console.log(`Generated Password: ${password}`);
