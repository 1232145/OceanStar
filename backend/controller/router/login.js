const express = require('express');
const loginRouter = express.Router();
const UserModel = require('../../model/usermodel')

loginRouter.get('/', async (req, res, next) => {
    const data = await UserModel.find();
    res.json(data)
});

loginRouter.post('/', async (req, res) => {
    const newData = new UserModel(req.body);
    await newData.save();
    res.json(newData)
})

loginRouter.delete('/:userId', async (req, res) => {
    const {userId} = req.params;
    await UserModel.deleteOne({_id: userId})
    res.json({msg: "Successfully deleted!"})
})

loginRouter.patch('/:userId', async (req, res) => {
    const {userId} = req.params;
    const user = await UserModel.findOneAndUpdate({_id: userId}, {
        ...req.body
    });
    if (!user) {
        res.status(400).send("User not found!")
    }
    res.json(user)
})

module.exports = loginRouter