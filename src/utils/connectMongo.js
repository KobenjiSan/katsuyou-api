// Utility to connect to MongoDB using environment variables

/**
 * Connects to MongoDB using MONGO_URI from .env
 * Logs success or exits on failure
 */
function connectMongo(){
    require('dotenv').config(); // imports dotenv library
    const mongoose = require('mongoose'); // imports mongoose to allow access to db
    const mongoURI = process.env.MONGO_URI;  // grabs MONGO_URI value from .env and stores it in a variable

    if (!mongoURI) {
        console.error("MONGO_URI is not defined in environment variables.");
        process.exit(1);
    }

    return mongoose.connect(mongoURI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('MongoDB connection error:', error);
        });
}

module.exports = { connectMongo };