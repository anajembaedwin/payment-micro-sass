const PaymentModel = require('./models/paymentModel');

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