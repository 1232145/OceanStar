const express = require('express')
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const mongoose = require('mongoose');

const loginRouter = require('./controller/router/login');
const products = require('./controller/router/products');

const server = 'mongodb+srv://ngohu01:ngoviduchuy123@cluster0.ygfxvzr.mongodb.net/Ocean_users?retryWrites=true&w=majority';

mongoose.connect(server,
{useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('error', err => console.log('Error connecting to DB', err))
mongoose.connection.once('open', () => console.log('Connected successfully!'))

app.use('/login', loginRouter);
app.use('/products', products)

const port = 5000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
