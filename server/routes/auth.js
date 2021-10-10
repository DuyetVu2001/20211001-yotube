const express = require('express');
const router = express.Router();

const { get, post } = require('../controllers/AuthController');

router.get('/', get);
router.post('/', post);

module.exports = router;
