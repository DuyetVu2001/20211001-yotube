const express = require('express');
const router = express.Router();

const {
	getAllPostComments,
	createComment,
	deleteComment,
} = require('../controllers/CommentController');
const verifyToken = require('../middleware/verifyToken');

router.get('/:videoId', getAllPostComments);
router.post('/', verifyToken, createComment);
router.delete('/delete/:commentId', deleteComment);

module.exports = router;
