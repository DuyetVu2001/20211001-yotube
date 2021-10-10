const mongoose = require('mongoose');

const VideoScheme = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},

	video: {
		type: String,
		required: true,
	},

	// channel: {
	// 	type: String,
	// 	required: true,
	// },

	// channelImg: {
	// 	type: String,
	// 	required: true,
	// },

	// thumbnail: {
	// 	type: String,
	// 	required: true,
	// },

	// duration: {
	// 	type: Number,
	// 	required: true,
	// },

	// views: {
	// 	type: Number,
	// 	required: true,
	// },
});

module.exports = mongoose.model('Video', VideoScheme);
