const Verb = require('../models/verbs'); // Loads the file that defines Mongoose model for verbs collection.

const getVerb = async (req, res) => {
    try{
        const data = await Verb.findOne({hiragana: req.params.hiragana});

        if(data === null){
            res.status(400).json(`${req.params.hiragana} is not in memory`);
        }else{
            res.status(200).json(data);
        }
    }catch(error){
        console.error('MongoDB ERROR:', error); // ✅ logs real issue to terminal
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = { getVerb };