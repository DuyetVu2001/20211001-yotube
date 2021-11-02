const express = require('express');
const router = express.Router();

const { login, register, users } = require('../controllers/UserController');

router.get('/', users);
router.post('/register', register);
router.post('/login', login);

module.exports = router;
