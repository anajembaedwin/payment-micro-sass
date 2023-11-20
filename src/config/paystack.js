require('dotenv').config();
const paystack = require('paystack')(process.env.PAYSTACK_SECRET_KEY);

module.exports = {
    secretKey: process.env.PAYSTACK_SECRET_KEY,
    paystack
};