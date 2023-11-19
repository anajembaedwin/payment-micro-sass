const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, 'This payment must have an amount']
    },
    date: {
        type: Date,
        default: Date.now
    },
    // Add other fields as necessary
});

const PaymentModel = mongoose.model('Payment', paymentSchema);

module.exports = PaymentModel;