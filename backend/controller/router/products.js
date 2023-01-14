const express = require('express');
const products = express.Router();
const ProductModel = require('../../model/productmodel')

products.get('/', async (req, res, next) => {
    const data = await ProductModel.find();
    res.json(data)
});

products.post('/', async (req, res) => {
    const newData = new ProductModel(req.body);
    await newData.save();
    res.json(newData)
})

products.delete('/:productId', async (req, res) => {
    const {userId} = req.params;
    await ProductModel.deleteOne({_id: userId})
    res.json({msg: "Successfully deleted!"})
})

products.patch('/:productID', async (req, res) => {
    const {userId} = req.params;
    const user = await ProductModel.findOneAndUpdate({_id: userId}, {
        ...req.body
    });
    if (!user) {
        res.status(400).send("Product not found!")
    }
    res.json(user)
})

module.exports = products
