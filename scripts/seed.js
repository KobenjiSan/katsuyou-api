// Seed script to wipe and repopulate verbs collection
// Usage: `node scripts/seed.js`

const Verb = require('../src/models/verbs'); // Mongoose model
const verbData = require('../data/verbs.json'); // JSON data

const { connectMongo } = require('../src/utils/connectMongo');

connectMongo()
    .then(() => {
        // Remove all existing verb documents
        Verb.deleteMany({}) 
            .then((result) => {
                console.log(`deleted ${result.deletedCount} entries.`);
                // Insert fresh data from JSON file
                Verb.insertMany(verbData)
                    .then((result) => {
                        console.log(`MongoDB reseeded at ${new Date().toLocaleString()} - with ${result.length} verbs added.`);
                        process.exit();
                    })
                    .catch((error) => console.log('Error seeding MongoDB:', error));
            })
            .catch((error) => console.log('Error deleting data from MongoDB:', error));
    })
    .catch((error) => console.log('MongoDB connection error within seed.js:', error));