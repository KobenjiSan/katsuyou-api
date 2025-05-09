// Mongoose model for Japanese verbs

const mongoose = require('mongoose');

// Schema structure:
// - hiragana: string
// - kanji: string
// - meaning: English definition
// - type: verb type (godan, ichidan, irregular)
const verbSchema = new mongoose.Schema({
    hiragana: { type: String, required: true },
    kanji: { type: String, required: true },
    meaning: { type: String, required: true },
    type: { type: String, enum:['ichidan', 'godan', 'irregular'], required: true},
    exampleTemplate: { type: String, required: false }, 
    exampleMeaning: { type: String, required: false }
});

module.exports = mongoose.model('Verb', verbSchema);