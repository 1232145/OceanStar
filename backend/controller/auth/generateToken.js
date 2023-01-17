const jwt = require('jsonwebtoken')

const generateToken = (data) => jwt.sign(data, "Super_Secret_Key@");

module.exports = generateToken;