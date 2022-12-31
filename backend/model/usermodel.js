const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserModel = mongoose.model('users', new Schema({
    username: String,
    password: String,
}))

module.exports = UserModel