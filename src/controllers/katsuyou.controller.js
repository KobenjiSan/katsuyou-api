// Controller for handling katsuyou (verb) API requests

const Verb = require('../models/verbs'); // Loads the file that defines Mongoose model for verbs collection.

/**
 * Handles GET /api/katsuyou/verb/:word
 * Checks if the word is valid Japanese
 * Returns verb data from MongoDB or error response
 */
const getVerb = async (req, res) => {
    try{
        const regCheck = /^[\u3040-\u30FF\u4E00-\u9FFF\uFF66-\uFF9D]+$/;
        if(!req.params.word || req.params.word.trim() === '' || !regCheck.test(req.params.word)){
            return res.status(400).json({error: `${req.params.word} is not a valid entry`});
        }else{
            let data = await Verb.findOne({hiragana: req.params.word});

            if(data === null){
                data = await Verb.findOne({kanji: req.params.word});
            }

            if(data === null){
                return res.status(400).json({error: `${req.params.word} is not in our database`});
            }else{
                return res.status(200).json(data);
            }
        }
    }catch(error){
        console.error('MongoDB ERROR:', error);
        return res.status(500).json({error: error.message });
    }
}

module.exports = { getVerb };