const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const mongoose = require('mongoose');
const {Schema} = mongoose;
const server = 'mongodb+srv://ngohu01:ngoviduchuy123@cluster0.ygfxvzr.mongodb.net/Ocean_users?retryWrites=true&w=majority';

mongoose.connect(server,
{useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('error', err => console.log('Error connecting to DB', err))
mongoose.connection.once('open', () => console.log('Connected successfully!'))

const UserModel = mongoose.model('users', new Schema({
    username: String,
    password: String,
}))

app.get('/', async (req, res, next) => {
    const data = await UserModel.find();
    res.json(data)
});

app.post('/', async (req, res) => {
    const newData = new UserModel(req.body);
    await newData.save();
    res.json(newData)
})

app.delete('/:userId', async (req, res) => {
    const {userId} = req.params;
    await UserModel.deleteOne({_id: userId})
    res.json({msg: "Successfully deleted!"})
})

app.patch('/:userId', async (req, res) => {
    const {userId} = req.params;
    const user = await UserModel.findOneAndUpdate({_id: userId}, {
        ...req.body
    });
    if (!user) {
        res.status(400).send("User not found!")
    }
    res.json(user)
})

const port = 5000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
