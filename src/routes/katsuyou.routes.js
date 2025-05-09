// Express route mapping for katsuyou API

const express = require('express');
const router = express.Router();

const { getVerb } = require('../controllers/katsuyou.controller');

// GET /api/katsuyou/verb/:word — fetch a verb by hiragana or kanji
router.get('/verb/:word', getVerb);

module.exports = router;