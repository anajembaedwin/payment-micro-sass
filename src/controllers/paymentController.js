const PaymentModel = require('../models/paymentModel');

exports.processPayment = async (req, res) => {
    try {
        const payment = await PaymentModel.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                payment
            }
        });
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