const crypto = require('crypto');

const generatePassword = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    const charactersLength = characters.length;
    let password = '';
    
    // Generate secure random bytes
    const randomBytes = crypto.randomBytes(length);

    for (let i = 0; i < length; i++) {
        // Map each byte to a character from the characters string
        password += characters[randomBytes[i] % charactersLength];
    }
    return password;
};
module.exports = generatePassword;
