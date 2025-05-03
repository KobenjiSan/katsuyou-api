const Verb = require('../models/verbs'); // Loads the file that defines Mongoose model for verbs collection.

const getVerb = async (req, res) => {
    try{
        let data = await Verb.findOne({hiragana: req.params.word});

        if(data === null){
            data = await Verb.findOne({kanji: req.params.word});
        }

        if(data === null){
            res.status(400).json({error: `${req.params.word} is not in our database`});
        }else{
            res.status(200).json(data);
        }
    }catch(error){
        console.error('MongoDB ERROR:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = { getVerb };