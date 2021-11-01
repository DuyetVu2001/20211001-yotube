const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentScheme = new Schema(
	{
		comment: {
			type: String,
			required: true,
		},

		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},

		videoId: {
			type: String,
			required: true,
		},

		commentId: { type: String },

		likes: {
			type: Array,
			default: [],
		},

		dislikes: {
			type: Array,
			default: [],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Comment', CommentScheme);
