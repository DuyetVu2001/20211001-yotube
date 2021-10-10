const express = require('express');
const router = express.Router();

const {
	getVideos,
	createVideo,
	deleteVideo,
} = require('../controllers/VideoController');

router.get('/', getVideos);
router.post('/', createVideo);
router.delete('/', deleteVideo);

module.exports = router;
