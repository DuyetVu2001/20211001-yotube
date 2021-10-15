const express = require('express');
const router = express.Router();

const { login, register, users } = require('../controllers/AuthController');

router.get('/', users);
router.post('/register', register);
router.post('/login', login);

module.exports = router;
