const express = require('express');
const router = express.Router();

const { getVerb } = require('../controllers/katsuyou.controller');

router.get('/verb/:word', getVerb);

module.exports = router;