const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, 'This payment must have an amount']
    },
    email: {
        type: String,
        required: [true, 'This payment must have an email']
    },
    date: {
        type: Date,
        default: Date.now
    },
    paystackReference: {
        type: String,
        required: false
    },
    // Add other fields as necessary
});

const PaymentModel = mongoose.model('Payment', paymentSchema);

module.exports = PaymentModel;