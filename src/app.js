const name = 'katsuyou-api';

const express = require('express');
const app = express();
const port = 7825;

const katsuyouRouter = require('./routes/katsuyou.routes');

require('dotenv').config(); // imports dotenv library
const mongoose = require('mongoose'); // imports mongoose to allow access to db
const mongoURI = process.env.MONGO_URI;  // grabs MONGO_URI value from .env and stores it in a variable
mongoose.connect(mongoURI).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
})

app.get('/api/test', (req, res) => {
    res.status(200).json({message:`Test successful. Successfully calling from ${name}`});
});

app.use('/api/katsuyou', katsuyouRouter);

app.listen(port, () => {
    console.log(`${name} running... PORT: ${port}`)
});