const User = require('../models/User');
const CryptoJS = require('crypto-js');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();
const { SECRET_KEY } = process.env;

// @ post --> /auth/register --> register --> public
exports.register = async (req, res) => {
	try {
		const { username, password } = req.body;
		// Check user is exist?
		const isUserExist = await User.findOne({ username });
		if (isUserExist)
			return res
				.status(401)
				.json({ success: false, message: 'User already exist!' });

		// Create new user
		// Encrypt password
		const hashPassword = CryptoJS.AES.encrypt(password, SECRET_KEY).toString();
		const newUser = new User({ username, password: hashPassword });
		await newUser.save();
		res.status(201).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ post --> /auth/login --> log in --> public
exports.login = async (req, res) => {
	try {
		const { username, password } = req.body;
		// Check user exist, password
		const isUserExist = await User.findOne({ username });
		// Decrypt password
		const bytes = CryptoJS.AES.decrypt(isUserExist.password, SECRET_KEY);
		const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
		if (!isUserExist || password !== originalPassword)
			return res
				.status(401)
				.json({ success: false, message: 'Incorrect username or password!' });

		// Crete token
		const accessToken = jwt.sign({ id: isUserExist._id }, SECRET_KEY);

		const { password: p, ...userRes } = isUserExist._doc;
		res.status(200).json({
			success: true,
			user: userRes,
			accessToken,
		});
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ post --> /auth --> get all user --> public
exports.users = async (_req, res) => {
	try {
		const users = await User.find();
		res.status(200).json({ success: true, users });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};
