var pwd = require('./MyHasher');
var db = require('./database_common');
console.log(pwd.PasswordHash('mango'));
console.log(pwd.MatchPassword('mango','banana'));
console.log(db.database);
console.log(db.username);
console.log(db.password);
console.log(db.port);
console.log(db.name);