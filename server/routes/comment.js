const express = require('express');
const router = express.Router();

const {
	getAllPostComments,
	createComment,
	deleteComment,
	likeComment,
	dislikeComment,
} = require('../controllers/CommentController');
const verifyToken = require('../middleware/verifyToken');

router.put('/like/:commentId', verifyToken, likeComment);
router.put('/dislike/:commentId', verifyToken, dislikeComment);

router.get('/:videoId', getAllPostComments);
router.post('/', verifyToken, createComment);
router.delete('/delete/:commentId', deleteComment);

module.exports = router;
