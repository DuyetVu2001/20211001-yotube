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

	category: {
		type: String,
		required: true,
	},

	likes: {
		type: Array,
		default: [],
	},

	dislikes: {
		type: Array,
		default: [],
	},

	// views: {
	// 	type: Number,
	// 	required: true,
	// },
});

module.exports = mongoose.model('Video', VideoScheme);
