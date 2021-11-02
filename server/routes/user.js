const express = require('express');
const router = express.Router();

const {
	subscriber,
	login,
	register,
	users,
} = require('../controllers/UserController');
const verifyToken = require('../middleware/verifyToken');

router.put('/subscriber', verifyToken, subscriber);
router.get('/', users);
router.post('/register', register);
router.post('/login', login);

module.exports = router;
