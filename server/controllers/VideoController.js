const Video = require('../models/Video');

// @ put --> /video/like/:videoId --> add user like video --> public
exports.likeVideo = async (req, res) => {
	try {
		// Check user is like?
		const video = await Video.findById(req.params.videoId);
		if (!video)
			return res
				.status(401)
				.json({ success: false, message: 'Video not found!' });

		let likes = video.likes;
		const isUserLiked = likes.includes(req.user.id);
		let dislikes = video.dislikes;
		const isUserDisliked = dislikes.includes(req.user.id);
		// if user dislike, delete user in dislikes array
		if (isUserDisliked)
			dislikes = dislikes.filter((userId) => userId.valueOf() !== req.user.id);
		// one user one like
		if (isUserLiked) {
			likes = likes.filter((userId) => userId.valueOf() !== req.user.id);
			await Video.findByIdAndUpdate(req.params.videoId, { $set: { likes } });
			return res.status(200).json({ success: true });
		}

		await Video.findByIdAndUpdate(req.params.videoId, {
			$push: { likes: req.user.id },
			dislikes,
		});

		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};

// @ put --> /video/dislike/:videoId --> add user dislike video --> public
exports.dislikeVideo = async (req, res) => {
	try {
		// Check user is like
		const video = await Video.findById(req.params.videoId);
		if (!video)
			return res
				.status(401)
				.json({ success: false, message: 'Video not found!' });

		let dislikes = video.dislikes;
		const isUserDisliked = dislikes.includes(req.user.id);
		let likes = video.likes;
		const isUserLiked = likes.includes(req.user.id);
		// if user like, delete user in likes array
		if (isUserLiked)
			likes = likes.filter((userId) => userId.valueOf() !== req.user.id);
		// one user one dislike
		if (isUserDisliked) {
			dislikes = dislikes.filter((userId) => userId.valueOf() !== req.user.id);
			await Video.findByIdAndUpdate(req.params.videoId, { $set: { dislikes } });
			return res.status(200).json({ success: true });
		}

		await Video.findByIdAndUpdate(req.params.videoId, {
			$push: { dislikes: req.user.id },
			likes,
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
				'username avatar'
			);
		else videos = await Video.find().populate('user', 'username avatar');

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
			'username avatar'
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

// @ delete --> /video --> delete video --> private
exports.deleteVideo = async (req, res) => {
	try {
		// videoID or _id
		const isDeleted = await Video.findByIdAndDelete(req.params.videoId);
		if (!isDeleted)
			return res
				.status(401)
				.json({ success: false, message: 'Delete failure!' });

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
		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};
