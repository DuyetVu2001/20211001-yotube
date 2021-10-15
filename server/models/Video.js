const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VideoScheme = new Schema({
	title: {
		type: String,
		required: true,
	},

	videoId: {
		type: String,
		required: true,
	},

	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},

	// duration: {
	// 	type: Number,
	// 	required: true,
	// },

	// views: {
	// 	type: Number,
	// 	required: true,
	// },

	// type: {
	// 	type: Number,
	// 	required: true,
	// },
});

module.exports = mongoose.model('Video', VideoScheme);
