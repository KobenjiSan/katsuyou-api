const name = 'katsuyou-api';

const express = require('express');
const app = express();
const port = process.env.PORT || 7825;

const katsuyouRouter = require('./routes/katsuyou.routes');

const { connectMongo } = require('./utils/connectMongo');

connectMongo()
    .then(() => {
        app.use('/api/katsuyou', katsuyouRouter);

        app.listen(port, () => {
            console.log(`${name} running... PORT: ${port}`)
        });
    });