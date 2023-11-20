const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/process-payment', paymentController.processPayment);
router.get('/all-payments', paymentController.getAllPayments);
router.get('/verify-payment', paymentController.verifyPayment);
// Setup other routes as necessary

module.exports = router;