const Video = require('../models/Video');

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
	const data = req.body;
	if (!data)
		return res.status(401).json({ success: false, message: 'Invalid data!' });
	try {
		const isDeleted = await Video.findByIdAndDelete(data.id);

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
exports.deleteAllVideo = async (req, res) => {
	const data = req.body;
	if (!data)
		return res.status(401).json({ success: false, message: 'Invalid data!' });
	try {
		await Video.deleteMany();

		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error });
	}
};
