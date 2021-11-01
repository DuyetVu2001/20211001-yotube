import { useState } from 'react';
import useFetchComment from '../../hooks/useFetchComments';
import Comment from './Comment';

export default function SingleComment({ comment, videoId }) {
	const [showReplies, setShowReplies] = useState(false);
	const { data: comments } = useFetchComment(videoId);
	const [countComment] = useState(
		comments.filter((reply) => reply.commentId === comment._id).length
	);

	return (
		<div className="">
			<Comment key={comment._id} comment={comment} />
			<div className="ml-[52px]">
				<p
					className="text-xs font-bold text-blue-500 cursor-pointer"
					onClick={() => setShowReplies(!showReplies)}
				>
					{countComment !== 0 &&
						`${!showReplies ? 'View' : 'Hide'} ${countComment} ${
							countComment === 1 ? ' reply' : ' replies'
						}`}
				</p>
				{showReplies &&
					comments
						.filter((reply) => reply.commentId === comment._id)
						.map((reply) => <Comment small key={reply._id} comment={reply} />)}
			</div>
		</div>
	);
}
