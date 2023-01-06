const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserModel = mongoose.model('users', new Schema({
    email: { 
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
}))

module.exports = UserModel