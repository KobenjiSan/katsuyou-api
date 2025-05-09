const name = 'katsuyou-api';

const express = require('express');
const app = express();
const port = process.env.PORT || 7825;

const morgan = require('morgan');

const katsuyouRouter = require('./routes/katsuyou.routes');

const { connectMongo } = require('./utils/connectMongo');

connectMongo()
    .then(() => {
        app.use(morgan('dev')); // logs incoming requests

        app.use('/api/katsuyou', katsuyouRouter);

        // Global error handler (fallback if something isnt caught properly)
        app.use((err, req, res, next) => {
            console.error(err.stack);
            res.status(500).json({message: 'Something went wrong.'});
        });

        app.listen(port, () => {
            console.log(`${name} running... PORT: ${port}`)
        });
    });