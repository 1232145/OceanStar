const mongoose = require('mongoose');
const {Schema} = mongoose;

const ContactModel = mongoose.model('contacts', new Schema({
    note: String,
    phone: Number,
    name: String,
    email: { 
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
    }
}))

module.exports = ContactModel;