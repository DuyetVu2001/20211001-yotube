const express = require('express');
const router = express.Router();

const {
	getVideos,
	createVideo,
	deleteVideo,
	deleteAllVideo,
	getVideo,
} = require('../controllers/VideoController');

router.get('/', getVideos);
router.get('/:videoId', getVideo);
router.post('/', createVideo);
router.delete('/', deleteVideo);
router.delete('/delete-all', deleteAllVideo);

module.exports = router;
