require('dotenv').config();

module.exports = {
    secretKey: process.env.STRIPE_SECRET_KEY
};