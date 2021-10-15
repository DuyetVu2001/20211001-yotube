const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},

	avatar: {
		type: String,
		required: false,
	},

	password: {
		type: String,
		required: false,
	},
});

module.exports = mongoose.model('User', UserScheme);
