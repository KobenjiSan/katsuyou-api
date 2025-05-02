const express = require('express');
const router = express.Router();

const { getVerb } = require('../controllers/katsuyou.controller');

router.get('/verb/:hiragana', getVerb);

module.exports = router;