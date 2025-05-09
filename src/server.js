// Entry point for running server
// Connects to MongoDB and starts listening for API requests

const app = require('./app.js');
const name = 'katsuyou-api';
const port = process.env.PORT || 7825;

const { connectMongo } = require('./utils/connectMongo');

connectMongo()
    .then(() => {
            app.listen(port, () => {
            console.log(`${name} running... PORT: ${port}`)
        });
    });