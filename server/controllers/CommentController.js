const Comment = require('../models/Comment');

// @ put --> /like/:commentId --> user like comment --> private
exports.likeComment = async (req, res) => {
	try {
		const comment = await Comment.findById(req.params.commentId);
		const isLiked = comment.likes.includes(req.user.id);
		const isDisliked = comment.dislikes.includes(req.user.id);

		if (isLiked)
			await Comment.findByIdAndUpdate(req.params.commentId, {
				$pull: { likes: req.user.id },
			});
		else if (isDisliked)
			await Comment.findByIdAndUpdate(req.params.commentId, {
				$push: { likes: req.user.id },
				$pull: { dislikes: req.user.id },
			});
		else
			await Comment.findByIdAndUpdate(req.params.commentId, {
				$push: { likes: req.user.id },
			});

		return res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ put --> /dislike/:commentId --> user dislike comment --> private
exports.dislikeComment = async (req, res) => {
	try {
		const comment = await Comment.findById(req.params.commentId);
		const isDisliked = comment.dislikes.includes(req.user.id);
		const isLiked = comment.likes.includes(req.user.id);

		if (isDisliked)
			await Comment.findByIdAndUpdate(req.params.commentId, {
				$pull: { dislikes: req.user.id },
			});
		else if (isLiked)
			await Comment.findByIdAndUpdate(req.params.commentId, {
				$push: { dislikes: req.user.id },
				$pull: { likes: req.user.id },
			});
		else
			await Comment.findByIdAndUpdate(req.params.commentId, {
				$push: { dislikes: req.user.id },
			});

		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ get --> /comment/:videoId --> get all comments of video --> public
exports.getAllPostComments = async (req, res) => {
	try {
		const comments = await Comment.find({
			videoId: req.params.videoId,
		})
			.sort({ createdAt: -1 })
			.populate('user', 'username avatar');

		res.status(200).json({ success: true, comments });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ post --> /comment/ --> create comment --> private
exports.createComment = async (req, res) => {
	const data = req.body;
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
