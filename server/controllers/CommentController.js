const Comment = require('../models/Comment');
const Video = require('../models/Video');

// @ get --> /comment/:videoId --> get all comments of video --> public
exports.getAllPostComments = async (req, res) => {
	try {
		const comments = await Comment.find({
			videoId: req.params.videoId,
		}).populate('user', 'username avatar');

		res.status(200).json({ success: true, comments });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ post --> /comment/ --> create comment --> private
exports.createComment = async (req, res) => {
	const data = req.body;
	console.log(data);
	if (!data)
		return res.status(401).json({ success: false, message: 'Invalid data!' });

	try {
		const newComment = new Comment({ ...data, user: req.user.id });
		await newComment.save();
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ delete --> /comment/:commentId --> delete comment --> private
exports.deleteComment = async (req, res) => {
	try {
		const isDeleted = await Comment.findByIdAndDelete(req.params.commentId);
		if (!isDeleted)
			return res
				.status(401)
				.json({ success: false, message: 'Comment not found!' });

		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};
