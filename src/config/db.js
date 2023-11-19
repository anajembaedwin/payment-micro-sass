const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbConnection = process.env.NODE_ENV === 'production' ? process.env.PROD_DB_CONNECTION : process.env.DEV_DB_CONNECTION;
        // await mongoose.connect(process.env.DB_CONNECTION);
        await mongoose.connect(dbConnection);
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

// run with NODE_ENV=development node src/server.js