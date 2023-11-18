const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

// Import routes
const paymentRoute = require('./routes/payment');

// Middleware
app.use(express.json());

// Routes
app.use('/payment', paymentRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));