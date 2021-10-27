const express = require('express');
const router = express.Router();

const {
	getVideos,
	createVideo,
	deleteVideo,
	deleteAllVideos,
	getVideo,
	getCategories,
	likeVideo,
	dislikeVideo,
} = require('../controllers/VideoController');

const verifyToken = require('../middleware/verifyToken');

router.put('/like/:videoId', verifyToken, likeVideo);
router.put('/dislike/:videoId', verifyToken, dislikeVideo);

router.get('/', getVideos);
router.get('/categories', getCategories);
router.get('/:videoId', getVideo);
router.post('/', verifyToken, createVideo);
router.delete('/delete-all', verifyToken, deleteAllVideos);
router.delete('/:videoId', verifyToken, deleteVideo);

module.exports = router;
