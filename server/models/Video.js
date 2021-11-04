const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VideoScheme = new Schema(
	{
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

		totalViews: {
			type: Number,
			default: 0,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Video', VideoScheme);
