const PaymentModel = require('../models/paymentModel');
const { paystack } = require('../config/paystack');

exports.processPayment = async (req, res) => {
    try {
        // Initialize a transaction
        const response = await paystack.transaction.initialize({
            amount: req.body.amount,  // amount in kobo
            email: req.body.email,  // customer's email
        });

        const payment = await PaymentModel.create({
            amount: req.body.amount,
            email: req.body.email,
            paystackReference: response.data.reference,
            // Add other fields as necessary
        });

        // Redirect to the payment page
        res.redirect(response.data.authorization_url);
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};



exports.getAllPayments = async (req, res) => {
    try {
        const payments = await PaymentModel.find();
        res.json(payments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.verifyPayment = async (req, res) => {
    try {
        const response = await paystack.transaction.verify(req.query.reference);

        // The transaction was successful
        if (response.data.status === 'success') {
            // Save the payment in your database
            const payment = await PaymentModel.create({
                amount: response.data.amount / 100,  // convert amount back to naira
                date: Date.now(),
                // Add other fields as necessary
            });

            res.status(201).json({
                status: 'success',
                data: {
                    payment
                }
            });
        } else {
            // The transaction was not successful
            res.status(400).json({
                status: 'fail',
                message: 'The transaction was not successful'
            });
        }
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message
        });
    }
};