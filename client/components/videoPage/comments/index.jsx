import axios from 'axios';
import { useState } from 'react';
import { API } from '../../../constant';
import useFetchComment from '../../../hooks/useFetchComments';
import CommentInput from './CommentInput';
import SingleComment from './SingleComment';

export default function Comments({ videoId }) {
	const { data: comments, error: commentsError } = useFetchComment(videoId);
	const [comment, setComment] = useState('');

	const handleCommentSubmit = async () => {
		await axios.post(API + 'comment', { comment, videoId });
		setComment('');
	};

	return (
		<div>
			<div>
				<p className="my-6 font-medium">
					{comments && !commentsError && comments.length > 1
						? `${comments?.length} Comments`
						: `${comments?.length} Comment`}
				</p>
				<CommentInput
					value={comment}
					setValue={setComment}
					handleSubmit={handleCommentSubmit}
				/>
			</div>
			{comments &&
				!commentsError &&
				comments
					.filter((comment) => !comment.commentId)
					.map((comment) => (
						<SingleComment
							key={comment._id}
							videoId={videoId}
							comment={comment}
						/>
					))}
		</div>
	);
}
