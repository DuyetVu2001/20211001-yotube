const express = require('express');
const router = express.Router();

const {
	getVideos,
	createVideo,
	deleteVideo,
	deleteAllVideo,
	getVideo,
	getCategories,
} = require('../controllers/VideoController');

const verifyToken = require('../middleware/verifyToken');

router.get('/', getVideos);
router.get('/categories', getCategories);
router.get('/:videoId', getVideo);
router.post('/', verifyToken, createVideo);
router.delete('/', verifyToken, deleteVideo);
router.delete('/delete-all', verifyToken, deleteAllVideo);

module.exports = router;
