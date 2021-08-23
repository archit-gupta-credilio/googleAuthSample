const mysql = require('mysql');
const Schema = mysql.Schema;

const userSchema = new Schema({
    username:String,
    googlId:String,
    thumbnail:String

});

const User = mysql.model('user', userSchema);

module.exports = User;