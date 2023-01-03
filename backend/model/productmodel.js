const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductModel = mongoose.model('products', new Schema({
    description: String,
    price: Number,
    name: String,
    path: String
}))

module.exports = ProductModel;