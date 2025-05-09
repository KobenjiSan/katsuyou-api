// Express app setup with routes and global error handling

const express = require('express');
const app = express();
const morgan = require('morgan');

const katsuyouRouter = require('./routes/katsuyou.routes');

// logs incoming requests
app.use(morgan('dev')); 

// Mounts katsuyou-related API routes
app.use('/api/katsuyou', katsuyouRouter);

// Global error handler (fallback if something isnt caught properly)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message: 'Something went wrong.'});
});      

module.exports = app;