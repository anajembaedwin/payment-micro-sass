const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, 'A payment must have an amount']
    },
    date: {
        type: Date,
        default: Date.now
    },
    // Add other fields as necessary
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;