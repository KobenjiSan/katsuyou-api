const mongoose = require('mongoose');

const verbSchema = new mongoose.Schema({
    hiragana: { type: String, required: true },
    kanji: { type: String, required: true },
    meaning: { type: String, required: true },  // could become: meanings: [{ meaing: String , pastMeaning: String }]
    pastMeaning: { type: String, required: false }, // false in case I cant find a good past-tense translation 
    type: { type: String, enum:['ichidan', 'godan', 'irregular'], required: true},
    // false as I might build the word then add sentence later, 
    // also might need to be an object for words with multiple meanings
    // could become: examples: [{ template: String, meaning: String}]
    exampleTemplate: { type: String, required: false }, 
    exampleMeaning: { type: String, required: false }
});

module.exports = mongoose.model('Verb', verbSchema);