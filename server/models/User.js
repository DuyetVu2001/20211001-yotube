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

	subscribers: {
		type: Array,
		default: [],
	},

	subscriptions: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			default: [],
		},
	],
});

module.exports = mongoose.model('User', UserScheme);
