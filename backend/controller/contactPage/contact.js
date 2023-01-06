const express = require('express');
const contact = express.Router();
const ContactModel = require('../../model/ContactModel')

contact.get('/', async (req, res, next) => {
    const data = await ContactModel.find();
    res.json(data)
});

contact.post('/', async (req, res) => {
    const newData = new ContactModel(req.body);
    await newData.save();
    res.json(newData)
})

contact.delete('/:ContactId', async (req, res) => {
    const {userId} = req.params;
    await ContactModel.deleteOne({_id: userId})
    res.json({msg: "Successfully deleted!"})
})

contact.patch('/:ContactID', async (req, res) => {
    const {userId} = req.params;
    const user = await ContactModel.findOneAndUpdate({_id: userId}, {
        ...req.body
    });
    if (!user) {
        res.status(400).send("Contact not found!")
    }
    res.json(user)
})

module.exports = contact