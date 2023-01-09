const express = require('express');
const loginRouter = express.Router();
const UserModel = require('../../model/usermodel');
const generateToken = require('../auth/generateToken');

loginRouter.get('/', async (req, res, next) => {
    const data = await UserModel.find();
    res.json(data)
});

//auth
loginRouter.post('/', async (req, res) => {
    // const newData = new UserModel(req.body);
    // await newData.save();
    const {email, password} = req.body;
    const data = await UserModel.find();
    const user = data.filter(item => item.email === email && item.password === password)
    if (user[0]) {
        const token = generateToken("dsada");
        res.json({
            token: token,
            email: user[0].email,
        })
    } else {
        res.json({msg: "Wrong username or password!"})
    }
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