const Video = require('../models/Video');
const Comment = require('../models/Comment');

// @ put --> /video/like/:videoId --> add user like video --> private
exports.likeVideo = async (req, res) => {
	try {
		const video = await Video.findById(req.params.videoId);
		const isLiked = video.likes.includes(req.user.id);
		const isDisliked = video.dislikes.includes(req.user.id);

		if (isLiked)
			await Video.findByIdAndUpdate(req.params.videoId, {
				$pull: { likes: req.user.id },
			});
		else if (isDisliked)
			await Video.findByIdAndUpdate(req.params.videoId, {
				$push: { likes: req.user.id },
				$pull: { dislikes: req.user.id },
			});
		else
			await Video.findByIdAndUpdate(req.params.videoId, {
				$push: { likes: req.user.id },
			});

		return res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ put --> /video/dislike/:videoId --> add user dislike video --> private
exports.dislikeVideo = async (req, res) => {
	try {
		const video = await Video.findById(req.params.videoId);
		const isDisliked = video.dislikes.includes(req.user.id);
		const isLiked = video.likes.includes(req.user.id);

		if (isDisliked)
			await Video.findByIdAndUpdate(req.params.videoId, {
				$pull: { dislikes: req.user.id },
			});
		else if (isLiked)
			await Video.findByIdAndUpdate(req.params.videoId, {
				$push: { dislikes: req.user.id },
				$pull: { likes: req.user.id },
			});
		else
			await Video.findByIdAndUpdate(req.params.videoId, {
				$push: { dislikes: req.user.id },
			});

		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ get --> /video/ --> get all video --> public
exports.getVideos = async (req, res) => {
	try {
		const { category } = req.query;

		let videos;
		if (category && category !== 'undefined')
			videos = await Video.find({ category }).populate(
				'user',
				'username avatar subscribers'
			);
		else
			videos = await Video.find().populate(
				'user',
				'username avatar subscribers'
			);

		res.status(200).json({ success: true, videos });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ get --> /video/categories --> get category list --> public
exports.getCategories = async (_req, res) => {
	try {
		const categories = await Video.find({}, 'category').distinct('category');

		res.status(200).json({ success: true, categories });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ get --> /video/:videoId --> get video detail --> public
exports.getVideo = async (req, res) => {
	try {
		const video = await Video.findOne({ videoId: req.params.videoId }).populate(
			'user',
			'username avatar subscribers'
		);
		res.status(200).json({ success: true, video });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ post --> /video/ --> create video --> private
exports.createVideo = async (req, res) => {
	const data = req.body;
	if (!data)
		return res.status(401).json({ success: false, message: 'Invalid data!' });

	try {
		const newVideo = new Video({ ...data, user: req.user.id });
		await newVideo.save();
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ delete --> /video/videoId --> delete video --> private
exports.deleteVideo = async (req, res) => {
	try {
		const isDeleted = await Video.findByIdAndDelete(req.params.videoId);
		await Comment.deleteMany({ videoId: req.params.videoId });
		if (!isDeleted)
			return res
				.status(401)
				.json({ success: false, message: 'Video not found!' });

		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// SOS
// @ delete --> /video/delete-all --> delete ALL video --> private
exports.deleteAllVideos = async (_req, res) => {
	try {
		await Video.deleteMany();
		await Comment.deleteMany();
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};
